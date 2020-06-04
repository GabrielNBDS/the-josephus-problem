function isPowerOfTwo(x) {
  if(x != 1 ) {
    let remainder = x;
    do {
      x = remainder;
      remainder = x / 2;
    } while (remainder >= 1)

    if(x === 1) {
      return true;
    }
    return false;
  }
  return false;
  
}

function getWinner(n) {
  if(isPowerOfTwo(n) === true) {
    return 1;
  }

  let power = 0;
  let a = 0;

  do {
    a++;
    power = Math.pow(2, a); 
  } while (power < n);
  
  a -= 1;
  power = Math.pow(2, a); 
  
  let l = (n - power);
  
  const winner = (2 * l) + 1;

  return winner;
}

const input = document.getElementById('people');
const container = document.getElementById('problem');
const button = document.getElementById('submit-button');

function handleSubmit() {
  let lastResult = document.querySelector(".result");
  let lastWarning = document.querySelector(".warning");
  
  lastResult ? container.removeChild(lastResult) : null;
  lastWarning ? container.removeChild(lastWarning) : null; 

  if(input.value < 1) {
    let warning = document.createElement("p");
    warning.classList.add("warning")

    let text = document.createTextNode("Please select a value that is no less than 1.");
    
    warning.appendChild(text);
    container.appendChild(warning);

    return;
  }

  let result = document.createElement("p");
  result.classList.add("result")

  let text = document.createTextNode(`The last survivor is the number ${getWinner(input.value)}`);
  
  result.appendChild(text);
  container.appendChild(result);
}

button.addEventListener('click', handleSubmit);
