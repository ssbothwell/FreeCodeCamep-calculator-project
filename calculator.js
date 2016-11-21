function createCalculator() {
  var a = 0;
  var b = 0;
  var operatorSet = "none";
  var hasCalculated = false;
  var decimalFlag = false;
  var deci = 0;
  var operator;
  var operators = {
    add: function(){a += b; display("add", a);},
    subtract: function(){a -= b; display("subtract", a);},
    multiply: function(){a = a*b; display("multiply", a);},
    divide: function(){a = a/b; display("divide", a);},
  }

  function display(name, value) {
    if (name && value) {
      console.log(a);
    }
    if (name && !value) {
      console.log(name + ": " + b);
    }
  }

  function clear() {
    a = 0;
    b = 0;
    operatorSet = "none";
    display(clear.name);
  }

  function set(value) {
    if (hasCalculated == true && operatorSet == "none") {
      a = value;
      b = 0;
      hasCalculated = false;
    } else if (operatorSet == "none") {
      value = value.toString();
      a = a.toString();
      a = a.concat(value);
      a = parseFloat(a);
      if (decimalFlag == true) {
        a = a * Math.pow(10, deci);
        decimalFlag = false;
      }
    } else if (operatorSet != "none") {
      value = value.toString();
      b = b.toString();
      b = b.concat(value);
      b = parseFloat(b);
    }

  }

  function print() {
    console.log("a: " + a +"\nb: "+ b + "\noperator: " + operatorSet);
  }

  function decimal() {
    deci = -(a.toString().length);
    decimalFlag = true;
  }


  return {
    clear: clear,
    print: print,
    set: set,
    decimal: decimal,
    selectAdd: function() {operator = operators.add; operatorSet = "Add";},
    selectSubtract: function() {operator = operators.subtract; operatorSet = "Subtract";},
    selectMultiply: function() {operator = operators.multiply; operatorSet = "Multiply";},
    selectDivide: function() {operator = operators.divide; operatorSet = "divide";},
    calculate: function() {operator(); operatorSet = "none"; hasCalculated = true;},
  }
};

// Example:
calc = createCalculator(); // instantiate calc function
calc.set(3); // set a = 3
calc.decimal(); // set decimal place
calc.set(1); // set a = 3.1 (concat 1 to end of number)
calc.set(4); // set a = 3.14 (concat 4 to end of number)
calc.selectMultiply(); // select multiply operator
calc.set(2); // set B = 2
calc.print(); // print A,B, and operator (for testing)
calc.calculate(); // Calculate result and store as A
calc.calculate(); // Calculate result times b again (just like a real calculator)
