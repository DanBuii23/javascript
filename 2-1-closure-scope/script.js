function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(`Hàm đã được gọi ${count} lần`);
    };
}
const counter = createCounter();

//
function createValueStore(initialValue) {
    let value = initialValue;
    return {
        getValue: () => {
            return value;
        },
        setValue: (newValue) => {
            value = newValue;
        }
    };
}

const valueStore = createValueStore(0);

function updateValue() {
    const newValue = document.getElementById("newValue").value;
    valueStore.setValue(newValue);
    console.log(`Giá trị hiện tại: ${valueStore.getValue()}`);
}