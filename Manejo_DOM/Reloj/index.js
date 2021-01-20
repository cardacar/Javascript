const btn = document.getElementById('btn-alert');
const hor = document.getElementById('hor');
const min = document.getElementById('min');
const seg = document.getElementById('seg');

btn.addEventListener('click', ()=>{
    /* const hr = hor.innerText = (parseInt(hor.innerText,10))+1;
    const mn = min.innerText = (parseInt(min.innerText,10))+1; */
    const sg = seg.innerText = (parseInt(seg.innerText,10))+1;
    /* if(hr==24){
        hor.innerText = '00';
    }
    if(mn==60){
        min.innerText = '00';
    } */
    if(sg==60){
        seg.innerText = '00';
        comin.innerText = (parseInt(min.innerText,10))+1;
    }
});



