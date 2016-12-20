function createCalculator() {
  var a = 0;
  var b = 0;
  var operatorSet = "none";
  var hasCalculated = false;
  var decimalFlag = false;
  var operator;
  var operators = {
    add: function(){a += b;},
    subtract: function(){a -= b;},
    multiply: function(){a = a*b;},
    divide: function(){a = a/b;},
  }

  function clear() {
    a = 0;
    b = 0;
    operatorSet = "none";
    hasCalculated = false;
    decimalFlag = false;
  }

  function set(value) {
    if (operatorSet == "none") {
    // we are working on the `a` register 
      if (hasCalculated == true) {
      // we are starting a new calculation so clear both registers
      // then set `a` to `value`
      clear();
      a = parseFloat(value);
      return a;
      }
      if (a.toString().length == 9) {
      // dont add the new character and return the `a` register
        return a;
      }
      // Concat `value` to `a` register
      value = value.toString();
      a = a.toString();
      a = a.concat(value);
      a = parseFloat(a);
      return a;
    } else if (operatorSet != "none") {
    // we are working on the `b` register
    if (b.toString().length == 9) {
      // dont add the new character and return the `b` register
      return b;
    }
    if (b == 0) {
    // First character must be set not concat'd
      b = parseFloat(value);
      return b;
    } 
    // concat `value` to `a` register
    value = value.toString();
    b = b.toString();
    b = b.concat(value);
    b = parseFloat(b);
    return b;

    }

  }

  function calculate() {
    operator();
    hasCalculated = true;
    operatorSet = "none";
    return a;
  }

  function print() {
    //console.log([a, b, operatorSet, hasCalculated]);
    return [a, b, operatorSet, hasCalculated, decimalFlag];
  }

  function decimal() {
    if (hasCalculated == true) {
      b = 0;
      hasCalculated = false;
    }
    if (operatorSet == "none" & decimalFlag === false) {
      a = a.toString() + '.';
      decimalFlag = true;
    } else if (operatorSet != "none" & decimalFlag === false) {
      b = b.toString() + '.';
      decimalFlag = true;
    }
  }

  return {
    clear: clear,
    print: print,
    set: set,
    decimal: decimal,
    calculate: calculate,
    selectAdd: function() {operator = operators.add; operatorSet = "Add"; b = 0; decimalFlag = false;},
    selectSubtract: function() {operator = operators.subtract; operatorSet = "Subtract"; decimalFlag = false;},
    selectMultiply: function() {operator = operators.multiply; operatorSet = "Multiply"; decimalFlag = false;},
    selectDivide: function() {operator = operators.divide; operatorSet = "divide"; decimalFlag = false;},
  }
};

