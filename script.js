window.onload = function() {
  var calc = createCalculator();
  var nums = document.querySelectorAll('.num');
  var multiply = document.querySelector('.multiply');
  var divide = document.querySelector('.divide');
  var add = document.querySelector('.add');
  var subtract = document.querySelector('.subtract');
  var calculate = document.querySelector('.calculate');
  var clear = document.querySelector('.clear');
  var screen = document.querySelector('#screen')

  // Dev window
  var devA = document.querySelector('#a');
  var devB = document.querySelector('#b');
  var devOperation = document.querySelector('#operation');
  var devHasCalculated = document.querySelector('#hasCalculated');

  devA.innerHTML = 'foo';
  devB.innerHTML = 'bar';
  devOperation.innerHTML = 'baz';
  devHasCalculated.innerHTML = 'bam';

  function devUpdate() {
    devA.innerHTML = calc.print()[0];
    devB.innerHTML = calc.print()[1];
    devOperation.innerHTML = calc.print()[2];
    devHasCalculated.innerHTML = calc.print()[3];
  }

  for (var i = 0; i < nums.length; i++) {
    nums[i].onclick = function(e) {
      var btnVal = this.innerHTML;
      screen.innerHTML = calc.set(parseFloat(btnVal));
      devUpdate();
      // calc.set(screen.innerHTML);
      // if (screen.innerHTML.length > 8) {
      //   screen.innerHTML = parseInt(btnVal).toExponential();
      // }
    }
  }

  multiply.onclick = function(e) {
    calc.selectMultiply();
    devUpdate();
  }

  divide.onclick = function(e) {
    calc.selectDivide();
    devUpdate();
  }

  add.onclick = function(e) {
    calc.selectAdd();
    devUpdate();
  }

  subtract.onclick = function(e) {
    calc.selectSubtract ();
    devUpdate();
  }

  calculate.onclick = function(e) {
    screen.innerHTML = calc.calculate();
    devUpdate();
  }

  clear.onclick = function(e) {
    calc.clear();
    screen.innerHTML = '0';
    devUpdate();
  }

  //calculate.onclick = calc.calculate();
};
