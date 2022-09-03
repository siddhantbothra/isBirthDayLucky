let checkBtn = document.querySelector("#checkbtn");
let res = document.querySelector("#result");
let regex = /-/g;
checkBtn.addEventListener("click", () => {
  let date = document.querySelector("#date");
  let number = document.querySelector("#lucky-number");
  let a = date.value.replace(regex, "");
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + Number.parseInt(a[i]);
  }
  number = Number.parseInt(number.value);
  console.log(number);
  if (sum % number === 0) {
    result(true);
  } else {
    result(false);
  }
});

function result(a) {
  if (a) {
    res.textContent = "Your number is lucky🥳";
  } else {
    res.textContent = "Your number is not lucky🥲";
  }
}
