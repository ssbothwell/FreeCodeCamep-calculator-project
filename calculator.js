function createCalculator() {
  // Memory registers:
  var a = {'value': '', register: 'a'};
  var b = {'value': '', register: 'b'};
  // Active Register pointer:
  var active = a;

  var hasCalculated = false;
  var operatorSet = 'none';
  var decimalFlag = false;

  // Current operator:
  var operator;
  // Operator choice array:
  var operators = {
    add: function(){a.value += b.value;},
    subtract: function(){a.value -= b.value;},
    multiply: function(){a.value = a.value*b.value;},
    divide: function(){a.value = a.value/b.value;},
  }

  function clear() {
    a.value = '';
    b.value = '';
    active = a;
    hasCalculated = false;
    operatorSet = 'none';
    decimalFlag = false;
  }

  function set(value) {
    if (hasCalculated == true & operatorSet != 'none') {
      hasCalculated = false;
      active = b;
      b.value = '';
    }

    if (hasCalculated == true & operatorSet == 'none') {
      clear();
    }
    value = value.toString();
    active.value = active.value.toString();
    active.value = active.value.concat(value);
    if (a.value % 1 === 0) {
      active.value = active.value.toString().slice(0,9);
    } else {
      active.value = active.value.toString().slice(0,10);
    }
  }

  function calculate() {
    floatRegister(a);
    floatRegister(b);
    operator();

    if (a.value % 1 === 0) {
      a.value = parseFloat(a.value.toString().slice(0,9));
    } else {
      a.value = parseFloat(a.value.toString().slice(0,10));
    }
    active = a;
    hasCalculated = true;
    operatorSet = 'none';
    return a.value;
  }

  function print() {
    return [a.value, b.value, operatorSet, active.register, decimalFlag, hasCalculated];
  }

  function decimal() {
    if (decimalFlag === false) {
      if (hasCalculated === false  & active.value == 0) {
        set('0.');
      } else {
        set('.');
      }
      decimalFlag = true;
    } 
  }

  function signChange() {
    if (active.value > 0) {
      active.value = -Math.abs(active.value);
    } else if (active.value < 0) {
      active.value = Math.abs(active.value);
    }
  }

  function percentage() {
    active.value = active.value * 0.01;
  }
  
  function floatRegister(register) {
    register.value = parseFloat(register.value);
    return register;
  }

  return {
    clear: clear,
    print: print,
    set: set,
    decimal: decimal,
    signChange: signChange,
    percentage: percentage,
    calculate: calculate,
    selectAdd: function() {
                            if (operatorSet != 'none') { calculate(); };
                            operator = operators.add; 
                            operatorSet = 'Add'; 
                            active = b; 
                            decimalFlag = false;
                          },
    selectSubtract: function() {
                            if (operatorSet != 'none') { calculate(); };
                            operator = operators.subtract; 
                            operatorSet = 'Subtract'; 
                            active = b; 
                            decimalFlag = false;
                          },
    selectMultiply: function() {
                            if (operatorSet != 'none') { calculate(); };
                            operator = operators.multiply; 
                            operatorSet = 'Multiply'; 
                            active = b; 
                            decimalFlag = false;
                          },
    selectDivide: function() {
                            if (operatorSet != 'none') { calculate(); };
                            operator = operators.divide; 
                            operatorSet = 'divide'; 
                            active = b; 
                            decimalFlag = false;
                          },
  }
};

