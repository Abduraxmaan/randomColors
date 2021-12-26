const board = document.querySelector('.board');

const firstColor = Math.floor(Math.random()* 256),
secondColor = Math.floor(Math.random()* 256), 
thirdColor = Math.floor(Math.random()* 256);

for(let i = 0; i < 500; i++) {
   
    
    let block = document.createElement('div');
    
    block.classList.add('box');
    
    board.appendChild(block);

    block.addEventListener('mouseover', () => {
        block.style.background = "rgb("+firstColor+","+secondColor+","+thirdColor+")";
    })

    block.addEventListener('mouseleave', () => {
        block.style.background = '#1d1515'; 
    })
    
    
}

