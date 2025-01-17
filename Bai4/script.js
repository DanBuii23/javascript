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
    } else {
        alert("Vui lòng nhập ít nhất một số hợp lệ!");
    }
}

function sum() {
    if (arr.length === 0) {
        document.getElementById("result3").innerText = 'Mảng trống'
        return;
    } else {
        const sum = arr.reduce((acc, num) => acc + num, 0)
        document.getElementById("result3").innerText = sum
    }
}
