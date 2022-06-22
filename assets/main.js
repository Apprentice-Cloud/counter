const indicator = document.querySelector("#number-indicator");
const disp = document.querySelector("#display-heading");
const btns = document.querySelectorAll('button');



function addNumber() {
  btns.forEach(btn => {
  btn.addEventListener('click', () => {
  let value = btn.textContent.slice(1);
  disp.textContent = "added " + value;
  let currentValue = indicator.textContent;
  let total = parseInt(currentValue) + parseInt(value);
  indicator.textContent = total
  })
  })
}

addNumber();