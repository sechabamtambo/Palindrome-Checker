//let inputElement = document.querySelector('.js-input').value;
const checkButton = document.querySelector('.checkButton');
const display = document.querySelector('.display');

//const reversed = inputElement.split('').reverse().join('');

checkButton.onclick = function() {
  let inputElement = document.querySelector('.js-input').value.trim();
  const reversed = inputElement.split('').reverse().join('').toLowerCase();
  
  if(inputElement.toLowerCase() === reversed) {
    display.textContent = `${inputElement} is a palindrome`;
  }
  else {
    display.textContent = `${inputElement} is not a palindrome`
  }
  
   document.querySelector('.js-input').value = '';
}