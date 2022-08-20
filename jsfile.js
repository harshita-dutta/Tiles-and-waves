
const input = document.querySelector('#input');
let n = input.value;
console.log(n);
input.value = '';

const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(input.value);
    if (isNaN(n)) {
        alert("Please give a VALID input");
        n = '';
        
    } else {
        remove();
        n = parseInt(input.value);
        code();
    } 
})

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function randomNumber(num) {
    let n = 0;
    if (num != 7) {
        n = num;
    }
    let rnum = Math.floor(Math.random() * (8-n)) + n;
    return rnum;
}

function audioPlay(num){
    let audio = new Audio('audio/track-' + num + '.wav');
    audio.play();
}

function audioPause(num) {
    let audio = new Audio('audio/track-' + num + '.wav');
    audio.pause();
}


function code() {
    
    const div = document.querySelector('#mainDiv');
    
    for (let i = 0; i < n*n; i++){
        let subDiv = document.createElement('div');
        subDiv.setAttribute('class', 'keys');
        //subDiv.style.backgroundColor = randomColor();
        div.appendChild(subDiv);
    }
    
    const subDiv = document.getElementsByClassName('keys');
    
    let trackNum = randomNumber(0);
    for (let buttons of subDiv) {
        // buttons.onmouseenter = play;
        // buttons.onmouseenter = function () {
        //     buttons.style.backgroundColor = randomColor();
        // }
        buttons.addEventListener("mouseover", () => {
            audioPlay(trackNum);
        });
        buttons.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = randomColor();
        })

        buttons.addEventListener('mouseleave', () => {
            audioPause(trackNum);
        });
        trackNum = randomNumber(trackNum);
    }
    
}

function remove() {
    const boxes = document.querySelectorAll('.keys');
    boxes.forEach(box => {
        box.remove();
    })
}

