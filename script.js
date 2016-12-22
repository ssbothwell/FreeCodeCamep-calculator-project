window.onload = function() {
  var calc = createCalculator();
  var nums = document.querySelectorAll('.num');
  var multiply = document.querySelector('.multiply');
  var divide = document.querySelector('.divide');
  var add = document.querySelector('.add');
  var subtract = document.querySelector('.subtract');
  var calculate = document.querySelector('.calculate');
  var clear = document.querySelector('.clear');
  var decimalPlace = document.querySelector('#decimal');
  var screen = document.querySelector('#screen');

  // Dev window
  var devA = document.querySelector('#a');
  var devB = document.querySelector('#b');
  var devOperation = document.querySelector('#operation');
  var devHasCalculated = document.querySelector('#hasCalculated');
  var devDecimalFlag = document.querySelector('#decimalFlag');

  devA.innerHTML = 'foo';
  devB.innerHTML = 'bar';
  devOperation.innerHTML = 'baz';
  devHasCalculated.innerHTML = 'bam';

  function devUpdate() {
    devA.innerHTML = calc.print()[0];
    devB.innerHTML = calc.print()[1];
    devOperation.innerHTML = calc.print()[2];
    devHasCalculated.innerHTML = calc.print()[5];
    devDecimalFlag.innerHTML = calc.print()[4];
  }

  function updateScreen() {
    if (calc.print()[3] == 'a') {
      screen.innerHTML = calc.print()[0]; 
    } else if (calc.print()[3] == 'b') {
      screen.innerHTML = calc.print()[1];
    }
  }

  function sizeScreen() {
    if (screen.innerHTML.length == 7) {
      screen.className = "sevenDigits";
    } else if (screen.innerHTML.length == 8) {
      screen.className = "eightDigits";
    } else if (screen.innerHTML.length == 9) {
      screen.className = "nineDigits";
    } 
  }

  for (var i = 0; i < nums.length; i++) {
    nums[i].onclick = function() {
      var btnVal = this.innerHTML;
      calc.set(parseFloat(btnVal));
      updateScreen();
      sizeScreen();
      devUpdate();
    }
  }

  multiply.onclick = function() {
    calc.selectMultiply();
    devUpdate();
  }

  divide.onclick = function() {
    calc.selectDivide();
    devUpdate();
  }

  add.onclick = function() {
    calc.selectAdd();
    devUpdate();
  }

  subtract.onclick = function() {
    calc.selectSubtract ();
    devUpdate();
  }

  calculate.onclick = function() {
    screen.innerHTML = calc.calculate();
    devUpdate();
  }

  clear.onclick = function() {
    calc.clear();
    screen.innerHTML = '0';
    devUpdate();
  }

  decimalPlace.onclick = function() {
    calc.decimal();
    devUpdate();
    updateScreen();
  }
};
