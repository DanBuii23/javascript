//Bài 1
function tinhTong(a, b) {
    return a + b;
}
function tinhHieu(a, b) {
    return a - b;
}
function tinhTich(a, b) {
    return a * b;
}
function tinhThuong(a, b) {
    return a / b;
}
// Xử lý khi người dùng nhấn nút "Tính Tổng"
document.getElementById("tinh").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value); // Lấy giá trị số thứ nhất
    const num2 = parseFloat(document.getElementById("num2").value); // Lấy giá trị số thứ hai
    const result = document.getElementById("result");
    if (isNaN(num1) || isNaN(num2)) {
        alert("Vui lòng nhập đúng số");
        return;
    } else {
        const tong = tinhTong(num1, num2); // Gọi hàm tính tổng
        const hieu = tinhHieu(num1, num2); // Gọi hàm tính tổng
        const tich = tinhTich(num1, num2); // Gọi hàm tính tổng
        const thuong = tinhThuong(num1, num2); // Gọi hàm tính tổng
        result.innerHTML = `Tổng: ${tong}<br>Hiệu: ${hieu}\n<br>Tích: ${tich}\n<br>Thương: ${thuong}`; // Hiển thị kết quả
    }
});


//Bài 2
document.getElementById("nhap").addEventListener("click", function () {
    const student = {
        name: document.getElementById("name").value,
        age: parseInt(document.getElementById("age").value),
        point: parseFloat(document.getElementById("point").value),
    }

    const resultSV = document.getElementById("resultSV");

    if (!student.name || isNaN(student.age) || isNaN(student.point)) {
        resultSV.innerHTML = "Vui lòng nhập đầy đủ và chính xác thông tin!";
        return;
    }
    const sv = (student) => {
        return `
          <strong>Thông Tin Sinh Viên:</strong><br>
          Tên: ${student.name}<br>
          Tuổi: ${student.age}<br>
          Điểm: ${student.point}<br>
        `;
    };
    resultSV.innerHTML = sv(student);
})


//Bài 3
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
