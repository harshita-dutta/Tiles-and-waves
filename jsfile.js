
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
    let n = num;
    if (num == 7) {
        num = 0;
    }
    let rnum = Math.floor(Math.random() * (8 - num)) + num;
    if (rnum == n && rnum!=7) {
        rnum += 1;
    } else if (rnum == n && rnum==7){
        rnum = 0;
    }
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
    // div.parentNode.removeChild('ul');

    for (let i = 0; i < n*n; i++){
        let subDiv = document.createElement('div');
        subDiv.setAttribute('class', 'keys');
        //subDiv.style.backgroundColor = randomColor();
        div.appendChild(subDiv);
    }


    

    const subDiv = document.getElementsByClassName('keys');
    
    let i = 0;
    let trackNum = randomNumber(0);
    for (let buttons of subDiv) {
        
        buttons.addEventListener("mouseover", () => {
            
        });
        let color;
        buttons.addEventListener('mouseover', event => {
            color = randomColor();
            event.target.style.backgroundColor = color;
            buttons.addEventListener('mouseover', audioPlay(trackNum));
            buttons.addEventListener('mouseleave', audioPause(trackNum));
            trackNum = randomNumber(trackNum);
            i++;
            console.log("after " + i + " div: " + trackNum);
            buttons.style.border = '2px solid black';
        })

        buttons.addEventListener('mouseleave', () => {
            buttons.style.border = `2px solid ${color}`;
        });
        trackNum = randomNumber(trackNum);
        i++;
        console.log("after " + i + " div: " + trackNum);

    }

    div.setAttribute('style', `border: solid 2px black; display: grid; grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr);`)
    
    
}

function remove() {
    const boxes = document.querySelectorAll('.keys');
    boxes.forEach(box => {
        box.remove();
    })
}

