
let myObject = {};

function createObject() {
    myObject = {};
    displayResult('Object created.');
}

function addProperty() {
    const propertyName = prompt('Enter property name:');
    const propertyValue = prompt('Enter property value:');
    
    if (propertyName !== null && propertyName !== '' && propertyValue !== null) {
        myObject[propertyName] = propertyValue;
        displayResult(`Added property "${propertyName}" with value "${propertyValue}".`);
    }
}

function updateProperty() {
    const propertyName = prompt('Enter property name to update:');
    
    if (propertyName !== null && propertyName in myObject) {
        const newValue = prompt(`Enter new value for "${propertyName}":`);
        myObject[propertyName] = newValue;
        displayResult(`Updated property "${propertyName}" with new value "${newValue}".`);
    } else {
        displayResult(`Property "${propertyName}" not found.`);
    }
}

function deleteProperty() {
    const propertyName = prompt('Enter property name to delete:');
    
    if (propertyName !== null && propertyName in myObject) {
        delete myObject[propertyName];
        displayResult(`Deleted property "${propertyName}".`);
    } else {
        displayResult(`Property "${propertyName}" not found.`);
    }
}

function searchProperty() {
    const propertyName = prompt('Enter property name to search:');
    
    if (propertyName !== null && propertyName in myObject) {
        displayResult(`Found property "${propertyName}" with value "${myObject[propertyName]}".`);
    } else {
        displayResult(`Property "${propertyName}" not found.`);
    }
}

function displayObject() {
    displayResult(`Object: ${JSON.stringify(myObject, null, 2)}`);
}

function displayResult(message) {
    document.getElementById('result').textContent = message;
}
