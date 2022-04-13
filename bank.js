// All dom selector
let depositAmount = document.getElementById("deposit-amount");
let widrawAmount = document.getElementById("widraw-amount");
let totalBlance = document.getElementById("total-amount");
let depositValue = document.getElementById("deposit-input");
let widrawValue = document.getElementById("widraw-input");
let depositBtn = document.getElementById("depositBtn");
let widrawBtn = document.getElementById("widrawBtn");
let error = document.querySelector("li");

//addEvent listener
depositBtn.addEventListener("click", () => {
  if (depositValue.value > 0) {
    let depositFun = getUserValue(depositValue, depositAmount);
    depositAmount.innerText = depositFun;
    let total = getTotal(totalBlance);
    totalBlance.innerText = total + parseFloat(depositValue.value);
  } else {
    error.classList.add("li-active");
    setTimeout(() => {
      error.classList.remove("li-active");
    }, 3000);
  }
  //   if user user click the deposit button than clear the input value
  depositValue.value = "";
});
widrawBtn.addEventListener("click", () => {
  if (widrawValue.value > 0) {
    let widrawFun = getUserValue(widrawValue, widrawAmount);
    widrawAmount.innerText = widrawFun;
    let total = getTotal(totalBlance);
    totalBlance.innerText = total - parseFloat(widrawValue.value);
  } else {
    error.classList.add("li-active");
    setTimeout(() => {
      error.classList.remove("li-active");
    }, 3000);
  }

  //   if user user click the deposit button than clear the input value
  widrawValue.value = "";
});
// widrawBtn.addEventListener("click");

//Deposit amount functionality
function getUserValue(userInput, userAmount) {
  let userValueConvert = parseFloat(userInput.value);
  let userAmountConvert = parseFloat(userAmount.textContent);
  let total = userAmountConvert + userValueConvert;
  return total;
}

function getTotal(allBlance) {
  let blance = parseFloat(allBlance.textContent);
  return blance;
}
