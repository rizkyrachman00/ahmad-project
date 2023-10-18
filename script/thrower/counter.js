const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const counter = document.getElementById("counter");

function plus() {
  let count = counter.textContent;
  count = parseInt(count);
  return (count += 1);
}

function minus() {
  let count = counter.textContent;
  count = parseInt(count);
  return (count -= 1);
}

minusBtn.addEventListener("click", () => {
  let count = counter.textContent;
  count = parseInt(count);
  if (count === 0) return;
  console.log(count);
  counter.innerText = minus();
});

plusBtn.addEventListener("click", () => {
  let count = counter.textContent;
  console.log(count);
  counter.innerText = plus();
});
