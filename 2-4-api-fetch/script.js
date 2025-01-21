// async function fetchDataAndDisplay() {
//     const apiUrl = 'https://jsonplaceholder.typicode.com/users';
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         displayData(data);
//     } catch (error) {
//         document.getElementById("result1").innerText = `Lỗi khi tải dữ liệu: ${error.message}`;
//     }
// }

// function displayData(users) {
//     const resultDiv = document.getElementById("result1");
//     resultDiv.innerHTML = ''; // Clear previous content
//     users.forEach(user => {
//         const userDiv = document.createElement("div");
//         userDiv.classList.add("user");
//         userDiv.innerHTML = `
//             <hr></hr>
//             <h3>${user.name}</h3>
//             <p><strong>Username:</strong> ${user.username}</p>
//             <p><strong>Email:</strong> ${user.email}</p>
//             <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p> 
//         `;
//         resultDiv.appendChild(userDiv);
//     });
// }

// // Call the function to fetch data and display it
// fetchDataAndDisplay();

document.getElementById('userForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const userData = {
        name: name,
        email: email
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById('postResult').innerText = `Dữ liệu đã gửi: ${JSON.stringify(data, null, 2)}`;
    } catch (error) {
        document.getElementById('postResult').innerText = `Lỗi khi gửi dữ liệu: ${error.message}`;
    }
});