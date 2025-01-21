const arr = []
function addNum() {
    const add = document.getElementById("add").value

    if (add.length > 0) {
        const nums = add.split(',').map(num => {
            if (!isNaN(num)) {
                return Number(num);
            } else {
                alert('Nhập số hợp lệ!');
                throw new Error('Invalid number');
            }
        });
        arr.push(...nums);
        document.getElementById("viewArr").innerText = arr.join(", ");
        document.getElementById("add").value = "";
        document.getElementById("add").focus();
    } else if (arr.length === 0) {
        document.getElementById("result").innerText = 'Mảng trống'
        return;
    } else {
        alert("Vui lòng nhập ít nhất một số hợp lệ!");
    }
}

function sum() {
    const sum = arr.reduce((acc, num) => acc + num, 0)
    document.getElementById("result").innerText = sum

}

function binhPhuong() {
    const binhPhuongArr = arr.map((num) => num * num);
    document.getElementById("resultBP").innerText = binhPhuongArr.join(', ');
}

function locChan() {
    const locChanArr = arr.filter((num) => num % 2 == 0)
    document.getElementById("resultChan").innerText = locChanArr.join(', ')
}