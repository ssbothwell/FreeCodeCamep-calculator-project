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

  for (var i = 0; i < nums.length; i++) {
    nums[i].onclick = function(e) {
      var btnVal = this.innerHTML;
      screen.innerHTML = calc.set(btnVal);
      // calc.set(screen.innerHTML);
      // if (screen.innerHTML.length > 8) {
      //   screen.innerHTML = parseInt(btnVal).toExponential();
      // }
    }
  }

  multiply.onclick = function(e) {
    calc.selectMultiply();
  }

  divide.onclick = function(e) {
    calc.selectDivide();
  }

  add.onclick = function(e) {
    calc.selectAdd();
  }

  subtract.onclick = function(e) {
    calc.selectSubtract ();
  }

  calculate.onclick = function(e) {
    calc.calculate();
  }

  clear.onclick = function(e) {
    calc.clear();
    screen.innerHTML = 0;
  }

  calculate.onclick = calc.calculate();
};
