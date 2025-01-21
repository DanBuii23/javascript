async function fetchDataAsync(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (er) {
        throw er;
    }
}

async function loadAndDisplayData() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
        const data = await fetchDataAsync(url);
        document.getElementById("result1").innerText = JSON.stringify(data, null, 2);
    } catch (er) {
        document.getElementById("result1").innerText = `Lỗi khi tải dữ liệu: ${er.message}`;
    }
}

//
async function fetchUsersAsync(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

async function loadAndDisplayFirstUser() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    try {
        const users = await fetchUsersAsync(apiUrl);
        if (users.length > 0) {
            const firstUser = users[0];
            document.getElementById("result2").innerText = `
                ID: ${firstUser.id}
                Name: ${firstUser.name}
                Username: ${firstUser.username}
                Email: ${firstUser.email}
                Address: ${firstUser.address.street}, ${firstUser.address.city}
            `;
        } else {
            document.getElementById("result2").innerText = "Không có người dùng nào.";
        }
    } catch (error) {
        document.getElementById("result2").innerText = `Lỗi khi tải dữ liệu: ${error.message}`;
    }
}