function createCalculator() {
  var a = 0;
  var b = 0;
  var operatorSet = "none";
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
    if (operatorSet == "none") {
      value = value.toString();
      a = a.toString();
      a = a.concat(value);
      a = parseInt(a);
    } else if (operatorSet != "none") {
      value = value.toString();
      b = b.toString();
      b = b.concat(value);
      b = parseInt(b);
    }
  }

  function print() {
    console.log("a: " + a +"\nb: "+ b + "\noperator: " + operatorSet);
  }


  return {
    clear: clear,
    print: print,
    set: set,
    selectAdd: function() {operator = operators.add; operatorSet = "Add";},
    selectSubtract: function() {operator = operators.subtract; operatorSet = "Subtract";},
    selectMultiply: function() {operator = operators.multiply; operatorSet = "Multiply";},
    selectDivide: function() {operator = operators.divide; operatorSet = "divide";},
    calculate: function() {operator(); operatorSet = "none";},
  }
};

calc = createCalculator();
calc.set(40); // total = 40
calc.selectDivide();
calc.set(2);
calc.print();
calc.calculate();
calc.set(10);
calc.print();
