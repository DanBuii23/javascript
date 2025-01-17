const age = document.getElementById("age");
const confirm = document.getElementById("confirm");

confirm.addEventListener("click", function () {
    alert("Xin chào, tuổi của bạn là " + age.value);
});

const count = document.getElementById("count");
const loopbtn = document.getElementById("loopbtn");
const output = document.getElementById("output");

loopbtn.addEventListener("click", function () {
    for (let i = 1; i <= count.value; i++) {
        output.innerHTML += i + " ";
    }
});

const num = document.getElementById("num");
const check = document.getElementById("check");
const result = document.getElementById("result");

function isCorrect(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i == 0) return false;
    }
    return true;
}

check.addEventListener("click", function () {
    if (isCorrect(num.value)) {
        result.innerHTML = num.value + " là số nguyên tố";
    } else {
        result.innerHTML = num.value + " không phải là số nguyên tố";
    }
})