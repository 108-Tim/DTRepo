function Calculator() {
  let displayElem = document.getElementById("input");
  let expressionElem = document.getElementById("equation");
  let prevResult = 0;
  let operator = "+";
  let currInput;
  let isNewInput = true;
  let isLastInputNum = true;
  let isAfterEquals = false;

  this.numkey = function(numElement) {
    let input = removeComma();
    let number = numElement.querySelector('span').textContent;

    if ((input == "Cannot divide by zero") || (input == "Overflow")) {
      removeDisabled();
      expressionElem.textContent = "";
      isNewInput = true;
      isAfterEquals = false;
    }

    if (isAfterEquals) {
      expressionElem.textContent = "";
      isAfterEquals = false;
    }

    isNewInput ? 
      input = number
      : isValidLength() ? 
          input += number
          : input;

    displayElem.textContent = addComma(input);
    isLastInputNum = true;
    isNewInput = false;
    currInput = +input;
  }

  this.pi = function() {
    let input = removeComma();
    let number = Math.PI;

    if (isAfterEquals) {
      expressionElem.textContent = "";
      isAfterEquals = false;
    }

    isNewInput ? 
      input = number
      : input += number;

    displayElem.textContent = input;
    isLastInputNum = true;
    isNewInput = true;
    currInput = +input;
  }

  this.e = function() {
    let input = removeComma();
    let number = Math.E;

    if (isAfterEquals) {
      expressionElem.textContent = "";
      isAfterEquals = false;
    }

    isNewInput ? 
      input = number
      : input += number;

    displayElem.textContent = input;
    isLastInputNum = true;
    isNewInput = true;
    currInput = +input;
  }

  this.c = function() {
    let input = displayElem.textContent;

    if ((input == "Cannot divide by zero") || (input == "Overflow")) {
      removeDisabled();
      isLastInputNum = true;
      isAfterEquals = false;
      displayElem.textContent = "0";
    }

    expressionElem.textContent = "";
  }

  this.ce = function() {
    let input = displayElem.textContent;

    if ((input == "Cannot divide by zero") || (input == "Overflow")) {
      removeDisabled();
      isLastInputNum = true;
      isAfterEquals = false;
      expressionElem.textContent = "";
    }

    displayElem.textContent = "0";
    isNewInput = true;
  }

  this.backspace = function() {
    let input = removeComma();
    let arr = input.split("");

    if ((input == "Cannot divide by zero") || (input == "Overflow")) {
      removeDisabled();
      isLastInputNum = true;
      isAfterEquals = false;
      displayElem.textContent = "0";
      expressionElem.textContent = "";
      return;
    }

    if (isNewInput) return;

    arr.splice(-1, 1);
    displayElem.textContent = addComma(arr.join(""));
  }

  this.square = function() {
    let answer = (+displayElem.textContent) ** 2;

    console.log(answer);
  }

  this.inverse = function() {
    +displayElem.textContent == 0 ?
      handleError("Divide by Zero")
      : console.log(1 / (+displayElem.textContent));
  }

  this.absolute = function() {
    console.log(Math.abs(+displayElem.textContent));
  }

  this.exp = function() {
    // Convert to scientific notation
  }

  this.root = function() {
    console.log(Math.sqrt(+displayElem.textContent));
  }

  this.open = function() {
    // use stack to match parenthesis
  }

  this.close = function() {
    // use stack to match parenthesis
  }

  this.factorial = function() {
    console.log(fact(+displayElem.textContent));
  }

  this.tenRaisedTo = function() {
    console.log(10 ** (+displayElem.textContent));
  }

  this.log = function() {
    console.log(Math.log10(+displayElem.textContent));
  }

  this.ln = function() {
    console.log(Math.log(+displayElem.textContent));
  }

  this.decimal = function() {
    if ( noDecimal() && isValidLength() ) displayElem.textContent += ".";
  }

  this.operate = function(opeElement) {
    let thisOperator;

    switch (opeElement.id) {
      case "addition":
        thisOperator = "+";
        break;
      case "subtraction":
        thisOperator = "-";
        break;
      case "multiplication":
        thisOperator = "×";
        break;
      case "division":
        thisOperator = "÷";
        break;
      case "modulo":
        thisOperator = "mod";
        break;
      case "raisedTo":
        thisOperator = "^";
        break;
      default:
        thisOperator = "+";
    }

    if (isAfterEquals) {
      expressionElem.textContent = "";
      addStatement(removeComma() + " " + thisOperator + " ");
      isLastInputNum = false;
      isAfterEquals = false;
    }

    if (isLastInputNum) {
      addStatement(removeComma() + " " + thisOperator + " ");
    } else {
        changeOperator(thisOperator);
        return;
    }
    
    if ((thisOperator == "×") 
      || (thisOperator == "÷") 
      || (thisOperator == "mod") 
      || (thisOperator == "^")) {
      prevResult = evaluatePartial();
    } else {
      prevResult = evaluateCurrent();
    }

    prevResult = checkOverflow(prevResult);

    // when changing operators from + or -, into x or ÷, add parenthesis to the whole existing equation
    if (prevResult || prevResult == 0) displayElem.textContent = addComma(prevResult.toString());
    
    operator = thisOperator;
    isNewInput = true;
    isLastInputNum = false;
  }

  this.equals = function() {
    // on repeated presses
    // - if all operators are mult/div/mod/pow, repeat the last operation
    // - else, use evaluatePartial(), get the rightmost +/- operator, 
    //   and operate that with result of evaluatePartial()

    let input = displayElem.textContent;

    if ((input == "Cannot divide by zero") || (input == "Overflow")) {
      removeDisabled();
      isLastInputNum = true;
      displayElem.textContent = "0";
      isAfterEquals = false;
      return;
    }

    if (isAfterEquals) return;  // temporary implementation

    addStatement(removeComma());
    prevResult = checkOverflow(evaluateWhole());

    if (prevResult || prevResult == 0) {
      displayElem.textContent = addComma(prevResult.toString());
      expressionElem.textContent += " =";
    }

    isNewInput = true;
    isAfterEquals = true;
    isLastInputNum = false;
  }
}

/* ------------------- Helper Functions ------------------- */

function isValidLength() {
  let string = removeComma();
  let strlen = string.split(".").join("").length;
  
  if ( ((+string < 1 ) && (strlen < 16)) || (strlen < 15) ) return true;
  return false;
}

function noDecimal() {
  let string = removeComma();

  return !string.includes(".");
}

function removeComma() {
  let displayElem = document.getElementById("input");

  return displayElem.textContent.split(",").join("");
}

function addComma(arr) {
  let decimal = arr.at(-1);
  let withComma = (+arr).toLocaleString("en-US", {maximumSignificantDigits: 15});

  if (decimal == ".") {
    return withComma + ".";
  }

  return withComma;
}

function addStatement(string) {
  let expressionElem = document.getElementById("equation");

  expressionElem.textContent += string;
  expressionElem.scrollLeft = expressionElem.scrollWidth;
}

function changeOperator(string) {
  let expressionElem = document.getElementById("equation");

  let arr = expressionElem.textContent.split(" ");
  arr.splice(-2, 1, string);

  expressionElem.textContent = arr.join(" ");
}

function evaluateWhole() {
  let expressionElem = document.getElementById("equation");
  let equation = parseEquation(expressionElem.textContent);

  return(eval(equation));
}

function evaluateCurrent() {
  let expressionElem = document.getElementById("equation");
  let arr = expressionElem.textContent.split(" ");
  let equation;

  arr.splice(-2, 2);
  equation = arr.join(" ");
  equation = parseEquation(equation);
  
  return(eval(equation));
}

function evaluatePartial() {
  let expressionElem = document.getElementById("equation");
  let arr = expressionElem.textContent.split(" ");
  let equation;
  let index = -2;

  arr.splice(-2, 2);
  while((arr.at(index) == "×") || (arr.at(index) == "÷") || (arr.at(index) == "^") || (arr.at(index) == "mod")) index -= 2;

  index++;
  equation = parseEquation(arr.slice(index).join(" "));
  return(eval(equation));
}

function fact(n) {
  if (n < 0) {
    return "Invalid input";
  } else if ((n == 0) || (n == 1)) {
    return "1";
  } else {
    let answer = 1;

    for (let i = 1; i < n; n--) {
      answer *= n;
    }

    return answer;
  }
}

function parseEquation(string) {
  string = string.replaceAll("×", "*");
  string = string.replaceAll("÷", "/");
  string = string.replaceAll("mod", "%");
  string = string.replaceAll("^", "**");

  return string;
}

function checkOverflow(int) {
  let string = int.toString();
  
  if (!string.includes(".")) {
    if (string.length > 15) {
      handleError("Overflow");
      return;
    } else if (string == "Infinity") {
      handleError("Divide by Zero");
      return;
    }

    return int;
  } else {
    let arr = string.split(".");
    let intAmount = arr[0].length;
    let maxDecimal = 15 - intAmount;

    return parseFloat(int.toFixed(maxDecimal));
  }
}

function handleError(error) {
  let displayElem = document.getElementById("input");
  let expressionElem = document.getElementById("equation");

  switch(error) {
    case "Divide by Zero":
      displayElem.textContent = "Cannot divide by zero";
      break;
    case "Overflow":
      displayElem.textContent = "Overflow";
      expressionElem.textContent = "";
      break;
  }

  let keysToDisable = document.getElementsByClassName("over");
  
  let arr = Array.from(keysToDisable);

  for (let item of arr) {
    item.setAttribute("disabled", "true");
  }
}

function removeDisabled() {
  let keysToEnable = document.getElementsByClassName("over");
  let displayElem = document.getElementById("input");
  
  let arr = Array.from(keysToEnable);

  for (let item of arr) {
    item.removeAttribute("disabled");
  }
}