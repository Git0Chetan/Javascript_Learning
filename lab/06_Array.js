
let myArray = [];

function createArray() {
    myArray = [];
    displayResult('Array created.');
}

function pushElement() {
    const inputValue = prompt('Enter an element to push:');
    if (inputValue !== null) {
        myArray.push(inputValue);
        displayResult(`Pushed "${inputValue}" into the array.`);
    }
}

function popElement() {
    if (myArray.length === 0) {
        displayResult('Array is empty, cannot pop.');
    } else {
        const poppedElement = myArray.pop();
        displayResult(`Popped element: "${poppedElement}"`);
    }
}

function searchElement() {
    const inputValue = prompt('Enter an element to search:');
    if (inputValue !== null) {
        const index = myArray.indexOf(inputValue);
        if (index !== -1) {
            displayResult(`Found "${inputValue}" at index ${index}`);
        } else {
            displayResult(`"${inputValue}" not found in the array.`);
        }
    }
}

function emptyArray() {
    myArray = [];
    displayResult('Array emptied.');
}

function displayArray() {
    displayResult(`Array: [${myArray.join(', ')}]`);
}

function displayResult(message) {
    document.getElementById('result').textContent = message;
}
