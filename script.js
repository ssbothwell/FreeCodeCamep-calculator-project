window.onload = function() {
  var screenHeight = window.screen.availHeight;
  var calc = createCalculator();
  var nums = document.querySelectorAll('.num');
  var multiply = document.querySelector('.multiply');
  var divide = document.querySelector('.divide');
  var add = document.querySelector('.add');
  var subtract = document.querySelector('.subtract');
  var calculate = document.querySelector('.calculate');
  var clear = document.querySelector('.clear');
  var decimalPlace = document.querySelector('#decimal');
  var signChange = document.querySelector('#signChange');
  var percentage = document.querySelector('#percentage');
  var screen = document.querySelector('#screen');
  
  // Adjust Layout for screen size
  if (screenHeight <= 768) {
    var container = document.querySelector('#container');
    container.className = 'small';
  }

  // Dev window
  var devA = document.querySelector('#a');
  var devB = document.querySelector('#b');
  var devOperation = document.querySelector('#operation');
  var devHasCalculated = document.querySelector('#hasCalculated');
  var devDecimalFlag = document.querySelector('#decimalFlag');
  var devScreenHeight = document.querySelector('#screenHeight');

  devA.innerHTML = 'foo';
  devB.innerHTML = 'bar';
  devOperation.innerHTML = 'baz';
  devHasCalculated.innerHTML = 'bam';
  devScreenHeight.innerHTML = screenHeight;


  if (screenHeight <= 768) {
    console.log('small!');
    devScreenHeight.innerHTML = screenHeight + ' small!';
  } else {
    devScreenHeight.innerHTML = screenHeight + ' big!';
  }

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
    sizeScreen();
    console.log(calc.print()[3]);
  }

  function sizeScreen() {
    if (screen.innerHTML.length == 7) {
      screen.className = "sevenDigits";
    } else if (screen.innerHTML.length == 8) {
      screen.className = "eightDigits";
    } else if (screen.innerHTML.length >= 9) {
      screen.className = "nineDigits";
    } else if (screen.innerHTML.length < 7) {
      screen.className = "sixDigits";
    }
  }
  
  function clearHighlightKey() { 
    multiply.classList.remove('selectedOp');
    divide.classList.remove('selectedOp'); 
    add.classList.remove('selectedOp');
    subtract.classList.remove('selectedOp');
  }

  function highlightKey(key) {
    clearHighlightKey();
    if (!key.classList.contains('selectedOp')) {
      key.className += ' selectedOp';
    }
  }
  for (var i = 0; i < nums.length; i++) {
    nums[i].onclick = function() {
      var btnVal = this.innerHTML;
      calc.set(parseFloat(btnVal));
      clearHighlightKey();
      updateScreen();
      devUpdate();
    }
  }

  multiply.onclick = function() {
    calc.selectMultiply();
    if (calc.print()[2] !== 'none') {
      screen.innerHTML = calc.print()[0];  
    }
    devUpdate();
    highlightKey(multiply);
  }

  divide.onclick = function() {
    calc.selectDivide();
    if (calc.print()[2] !== 'none') {        
      screen.innerHTML = calc.print()[0];  
    }
    devUpdate();
    highlightKey(divide);
  }

  add.onclick = function() {
    calc.selectAdd();
    if (calc.print()[2] !== 'none') {
      screen.innerHTML = calc.print()[0];  
    }
    devUpdate();
    highlightKey(add); 
  }

  subtract.onclick = function() {
    calc.selectSubtract ();
    if (calc.print()[2] !== 'none') {
      screen.innerHTML = calc.print()[0];  
    }
    devUpdate();
    highlightKey(subtract);
  }

  calculate.onclick = function() {
    screen.innerHTML = calc.calculate();
    devUpdate();
    clearHighlightKey();
  }

  clear.onclick = function() {
    calc.clear();
    screen.innerHTML = '0';
    devUpdate();
    clearHighlightKey();
  }

  decimalPlace.onclick = function() {
    calc.decimal();
    devUpdate();
    updateScreen();
  }

  signChange.onclick = function() {
    calc.signChange();
    devUpdate();
    updateScreen();
  }

  percentage.onclick = function() {
    calc.percentage();
    devUpdate();
    updateScreen();
  }
};
