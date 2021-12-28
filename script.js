const note = document.querySelector("h1");
const form = document.querySelector("form");
const seconds = document.querySelector("#seconds");
const button = document.querySelector("#start-stop");
const noteArray = ['A','B','C','D','E','F','G'];
let previousIndex = randomIndex(noteArray);
let intervalId = null;

function randomIndex(array) {
    return Math.floor(Math.random()*array.length);
}

function randomIndexUnique() {
    let currentIndex = randomIndex(noteArray);
    while (currentIndex == previousIndex) {
        currentIndex = randomIndex(noteArray);
    }
    previousIndex = currentIndex;
    return previousIndex;
}

function startRandomNotes(seconds) {
    note.innerHTML = noteArray[randomIndexUnique(noteArray)];
    setTimeout(() => {
        intervalId = setInterval(() => {
            note.innerHTML = noteArray[randomIndexUnique(noteArray)];
        }, seconds*1000);
    }, 50);
}

function stopRandomNotes() {
    clearInterval(intervalId); 
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (intervalId == null) {
        button.value = 'STOP';
        button.style.backgroundColor = 'red';
        startRandomNotes(seconds.value);
    } else {
        button.value = 'START'
        button.style.backgroundColor = 'green';
        stopRandomNotes();
        intervalId = null;
    }
});