const boardWidth = document.querySelector('#board-display').offsetWidth;
const boardHeight =document.querySelector('#board-display').offsetHeight;

const numOfWidthPixels = boardWidth / 4;
const numOfHeightPixels = boardHeight / 4;

const board = document.querySelector('#board-display');
for(let i = 0; i <numOfHeightPixels-3;i++) {
    const row = document.createElement('div')
    row.setAttribute('class','row '+i);
    for(let j = 0;j <numOfWidthPixels-1;j++) {
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.addEventListener('mouseover',(e)=>{
            e.target.style.backgroundColor = '#616161'
            console.log('haha')
        })
        row.appendChild(pixel);
        
    }
    board.appendChild(row)
}

const restart =() => {
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach(pixel => {
        pixel.style.backgroundColor='#c9c9c9'
    })
    
}