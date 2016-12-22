function createCalculator() {
  // Memory registers:
  var a = {'value': 0, register: 'a'};
  var b = {'value': 0, register: 'b'};
  // Active Register pointer:
  var active = a;

  var hasCalculated = false;
  
  var operatorSet = "none";

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
    a.value = 0;
    b.value = 0;
    active = a;
    hasCalculated = false;
    operatorSet = "none";
    decimalFlag = false;
  }

  function set(value) {
    if (hasCalculated == true & operatorSet != 'none') {
      hasCalculated = false;
      active = b;
      b.value = 0;
    }

    if (hasCalculated == true & operatorSet == 'none') {
      clear();
    }

    value = value.toString();
    active.value = active.value.toString();
    active.value = active.value.concat(value);
    active.value = parseFloat(active.value);

  }

  function calculate() {
    operator();
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
      active.value = active.value.toString() + '.';
      decimalFlag = true;
    } 
  }

  return {
    clear: clear,
    print: print,
    set: set,
    decimal: decimal,
    calculate: calculate,
    selectAdd: function() {operator = operators.add; operatorSet = "Add"; active = b; decimalFlag = false;},
    selectSubtract: function() {operator = operators.subtract; operatorSet = "Subtract"; active = b; decimalFlag = false;},
    selectMultiply: function() {operator = operators.multiply; operatorSet = "Multiply"; active = b; decimalFlag = false;},
    selectDivide: function() {operator = operators.divide; operatorSet = "divide"; active = b; decimalFlag = false;},
  }
};

