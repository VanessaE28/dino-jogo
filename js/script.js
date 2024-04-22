const dino = document.querySelector('.dino')
const arvore = document.querySelector('.arvore')

const jump = () => {
    dino.classList.add('jump');
    
    setTimeout(() => {
        dino.classList.remove('jump'); 

    }, 500);
}

const loop = setInterval(() => {

    const arvorePosition = arvore.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');
    // console.log(pipePosition)
    // console.log(marioPosition);

    if (arvorePosition <= 120 && arvorePosition > 0 && dinoPosition < 80) {
        
        arvore.style.animation = 'none';
        arvore.style.left = `${arvorePosition}px`;

        dino.style.animation = 'none';
        dino.style.bottom = `${dinoPosition}px`;
        
        dino.src = 'images/gameOver.gif'
        dino.style.width = '75px'
        dino.style.marginLeft = '50px'

        clearInterval(loop);
    }
    

}, 10);

document.addEventListener('keydown', jump);