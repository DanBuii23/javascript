function addArr() {
    const text = document.getElementById("text").value;

    if (text.length > 1) {
        document.getElementById("viewText").innerText = text;
        document.getElementById("text").value = "";
        document.getElementById("text").focus();
    } else if (text.length <= 1) {
        alert('Phải nhập ít nhất hai ký tự');
        return text
    }
}

function daoNguocChuoi() {
    const text = document.getElementById("viewText").innerText;
    const reversedText = text.split('').reverse().join('');
    document.getElementById("resultDaoNguoc").innerText = reversedText;
}

function isPalindrome() {
    const text = document.getElementById("viewText").innerText;
    const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    const result = cleanedText === reversedText;
    document.getElementById("resultPalindrome").innerText = result ? "là palindrome" : "không phải là palindrome";
}

const sv = {
    name: "Nguyễn Văn A",
    age: 20,
    major: "Công nghệ thông tin"
};

function viewStudent() {
    const viewStudent = `
        <h4>Thông tin sinh viên:</h4>
        <p>Họ và tên: ${sv.name}</p>
        <p>Tuổi: ${sv.age}</p>
        <p>Ngành học: ${sv.major}</p>
    `;
    document.getElementById("resultSV").innerHTML = viewStudent;
}

function giaiPhuongTrinhBac2() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Vui lòng nhập số hợp lệ");
        return;
    }

    const delta = b * b - 4 * a * c;
    let result;

    if (delta < 0) {
        result = "Phương trình vô nghiệm";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        result = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        result = `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    }

    document.getElementById("resultPTB2").innerText = result;
}