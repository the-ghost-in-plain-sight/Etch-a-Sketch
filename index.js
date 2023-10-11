

let container = document.querySelector('#container');
let rangeVal = document.querySelector('#rangeVal');
let range = document.querySelector('#range');
range.value = 16;
let newRange = range.value;
rangeVal.textContent = range.value;

let color = document.querySelector('#color');
let newColor = color.value;
color.addEventListener('input', (colour) => {
    newColor = colour.target.value;
})



let clicker = false;
container.addEventListener('click', () => {
    if (clicker == false) {
        clicker = true;
    } else {
        clicker = false;
    }
})


for (let i = 0; i < newRange ** 2; i++) {
    let boxSize = 560 / newRange ;
    let theBox = document.createElement('div');
    theBox.addEventListener('mouseover', downColor);
    theBox.style.width = `${boxSize}px`;
    theBox.style.height = `${boxSize}px`;
    theBox.classList.toggle('boxClass');
    //theBox.style.borderWidth = '0px 1px 1px 0px';
    //theBox.style.borderStyle = 'solid';
    //theBox.style.borderColor = 'black'; 
    theBox.style.margin = '0px 0px 0px 0px';

    container.appendChild(theBox);
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        theBox.style.backgroundColor = 'white';
    });
}

range.addEventListener('input', (event) => {
    newRange = event.target.value;
    rangeVal.textContent = event.target.value;
    container.textContent = '';
    for (let i = 0; i < newRange ** 2; i++) {
        let boxSize = 560 / newRange ;
        let theBox = document.createElement('div');
        theBox.addEventListener('mouseover', downColor);
        theBox.style.width = `${boxSize}px`;
        theBox.style.height = `${boxSize}px`;
        theBox.classList.toggle('boxClass');
        //.style.borderWidth = '0px 1px 1px 0px';
        //theBox.style.borderStyle = 'solid';
        //theBox.style.borderColor = 'black'; 
        theBox.style.margin = '0px 0px 0px 0px';
    
        container.appendChild(theBox);
        let button = document.querySelector('button');
        button.addEventListener('click', () => {
            theBox.style.backgroundColor = 'white';
        });
    }
    
})

function downColor(equal) {
    if (clicker){
        let item = equal.target;
        item.style.backgroundColor = `${newColor}`;
    }
}

/* function cleaner() {
    theBox.style.backgroundColor = 'white';
}

() => {
        theBox.style.backgroundColor = 'white';
    }
*/


