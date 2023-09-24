
const boxes = document.querySelectorAll('.box');

// Add event listeners for mouseover and focus
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        changeColor(box);
    });

    box.addEventListener('focus', () => {
        changeColor(box);
    });
});

// Function to change the background color randomly
function changeColor(box) {
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
