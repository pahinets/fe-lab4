// === ЗАВДАННЯ 1 ===
// Номер у списку: 83 -> варіант n = (83 - 1) % 10 + 1 = 3
// Порядковий номер елемента: (n mod 10) + 1 = (3 mod 10) + 1 = 4
const fourthElement = document.getElementById('fourth-element');
const fifthElement = document.querySelector('ul.fifth-element');

let isFourthActive = false;
let isFifthActive = false;

fourthElement.addEventListener('click', () => {
    isFourthActive = !isFourthActive;
    if (isFourthActive) {
        fourthElement.style.backgroundColor = '#1e3a8a';
        fourthElement.style.color = '#ffffff';
    } else {
        fourthElement.style.backgroundColor = '#fde047';
        fourthElement.style.color = '#111827';
    }
});

fifthElement.addEventListener('click', () => {
    isFifthActive = !isFifthActive;
    if (isFifthActive) {
        fifthElement.style.backgroundColor = '#065f46';
        fifthElement.style.color = '#ecfdf5';
    } else {
        fifthElement.style.backgroundColor = '#fbcfe8';
        fifthElement.style.color = '#1f2937';
    }
});

// === ЗАВДАННЯ 2 ===
const imageContainer = document.getElementById('image-container');
const btnAdd = document.getElementById('btn-add');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnDelete = document.getElementById('btn-delete');

const IMAGE_SRC = 'lviv.jpg';
const DEFAULT_WIDTH = 700;
const STEP = 50;
const MIN_WIDTH = 150;
const MAX_WIDTH = 1100;

function getLastImage() {
    const images = imageContainer.querySelectorAll('img.city-image');
    return images.length > 0 ? images[images.length - 1] : null;
}

btnAdd.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://lviv.travel/ua/city-card';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const img = document.createElement('img');
    img.src = IMAGE_SRC;
    img.alt = 'Архітектура та панорама міста Львів';
    img.className = 'city-image';
    img.width = DEFAULT_WIDTH;

    link.appendChild(img);
    imageContainer.appendChild(link);
});

btnIncrease.addEventListener('click', () => {
    const lastImg = getLastImage();
    if (lastImg) {
        const currentWidth = lastImg.width || lastImg.clientWidth;
        if (currentWidth + STEP <= MAX_WIDTH) {
            lastImg.width = currentWidth + STEP;
        }
    }
});

btnDecrease.addEventListener('click', () => {
    const lastImg = getLastImage();
    if (lastImg) {
        const currentWidth = lastImg.width || lastImg.clientWidth;
        if (currentWidth - STEP >= MIN_WIDTH) {
            lastImg.width = currentWidth - STEP;
        }
    }
});

btnDelete.addEventListener('click', () => {
    const lastImg = getLastImage();
    if (lastImg) {
        const parentLink = lastImg.closest('a');
        if (parentLink && parentLink.parentElement === imageContainer) {
            imageContainer.removeChild(parentLink);
        } else {
            lastImg.remove();
        }
    }
});