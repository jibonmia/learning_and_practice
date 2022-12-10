
// Ruls 02
function getYellow(){
    document.body.style.backgroundColor = 'yellow';
}
// Ruls 03
const makeblue = document.getElementById('make-blue');
makeblue.onclick = getblue;

function getblue(){
    document.body.style.backgroundColor = 'blue';
}
// Ruls 04
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click',getGreen);

function getGreen(){
    document.body.style.backgroundColor= 'green';
}
// Ruls 05
const makepink = document.getElementById('make-pink');
makepink.addEventListener('click',function(){document.body.style.backgroundColor= 'pink'});

