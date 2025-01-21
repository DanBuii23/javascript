// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url).then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//             .then(data => resolve(data))
//             .catch(error => reject(error));
//     });
// }

// // Sử dụng hàm fetchData với một API giả lập
// const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

// fetchData(apiURL)
//     .then(data => {
//         console.log('Dữ liệu đã tải:', data);
//     })
//     .catch(error => {
//         console.error('Lỗi khi tải dữ liệu:', error);
//     });

function loadDataFromAPI(apiUrl) {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Chuyển đổi dữ liệu nhận được thành JSON
            })
            .then(data => {
                resolve(data); // Hoàn thành Promise với dữ liệu nhận được
            })
            .catch(error => {
                reject(error); // Từ chối Promise nếu có lỗi
            });
    });
}
// Sử dụng hàm
loadDataFromAPI('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => {
        console.log('Dữ liệu từ API: ', data);
    })
    .catch(error => {
        console.error('Có lỗi xảy ra: ', error);
    });
