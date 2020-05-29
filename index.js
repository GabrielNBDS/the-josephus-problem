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
  let result = document.createElement("p");

  result.innerHTML(`The last survivor is the number ${getWinner(input.value)}`);
  
  problem.appendChild(result);

  console.log('a');
}

button.addEventListener('click', handleSubmit);
