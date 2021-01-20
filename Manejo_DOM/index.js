const btn = document.getElementById('btn');
const bod = document.getElementById('bod');

btn.addEventListener('click', ()=>{
    let numb0 = getRandomArbitrary(0,256);
    let numb1 = getRandomArbitrary(0,256);
    let numb2 = getRandomArbitrary(0,256);
    bod.style.background = "rgb("+numb0+","+numb1+","+numb2+")";
});

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }