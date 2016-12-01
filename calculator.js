function createCalculator() {
  var a = 0;
  var b = 0;
  var operatorSet = "none";
  var hasCalculated = false;
  var decimalFlag = false;
  var deci = 0;
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
    if (decimalFlag == true) {
      value = '0.' + value.toString();
      decimalFlag = false;
    }
    if (hasCalculated == true) {
      if (operatorSet == "none") {
        clear();
        a = parseFloat(value);
        return a;
      } else {
        b = parseFloat(value);
        hasCalculated = false;
        return b;
      }

    } else if (operatorSet == "none") {
      value = value.toString();
      a = a.toString();
      a = a.concat(value);
      a = parseFloat(a);
      if (decimalFlag == true) {
        a = a * Math.pow(10, deci);
        decimalFlag = false;
      }
      return a;
    } else if (operatorSet != "none") {
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
    console.log([a, b, operatorSet, hasCalculated]);
    return [a, b, operatorSet, hasCalculated];
  }

  function decimal() {
    decimalFlag = true;
    // if (hasCalculated == false && operatorSet == "none") {
    //   //a = a.toString() + '.';
    // } else {
    //   b = b.toString() + '.';
    // }

    // deci = -(a.toString().length);
    // decimalFlag = true;
  }


  return {
    clear: clear,
    print: print,
    set: set,
    decimal: decimal,
    calculate: calculate,
    selectAdd: function() {operator = operators.add; operatorSet = "Add";},
    selectSubtract: function() {operator = operators.subtract; operatorSet = "Subtract";},
    selectMultiply: function() {operator = operators.multiply; operatorSet = "Multiply";},
    selectDivide: function() {operator = operators.divide; operatorSet = "divide";},
  }
};



// Example:
calc = createCalculator();
calc.set(314);
calc.decimal();
calc.set(1);
calc.print();
