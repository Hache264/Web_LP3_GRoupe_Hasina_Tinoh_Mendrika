const mipirina=document.querySelector('#i2');
mipirina.addEventListener('click',()=>{
    document.querySelector('.section2').classList.add('section2Apres');
});

const mipoitra = document.querySelector('#i1');
mipoitra.addEventListener('click',()=>{
    document.querySelector('.section2').classList.remove('section2Apres');
});

document.querySelector('#a1').addEventListener('mouseover',()=>{
    document.querySelector('.p1').style.display='flex';
});
document.querySelector('#a1').addEventListener('mouseout',()=>{
    document.querySelector('.p1').style.display='none';
});

document.querySelector('#a2').addEventListener('mouseover',()=>{
    document.querySelector('.p2').style.display='flex';
    document.querySelector('.p2').style.marginTop='5.5vw';
});
document.querySelector('#a2').addEventListener('mouseout',()=>{
    document.querySelector('.p2').style.display='none';
});

document.querySelector('#a3').addEventListener('mouseover',()=>{
    document.querySelector('.p3').style.display='flex';
    document.querySelector('.p3').style.marginTop='9.5vw';
});
document.querySelector('#a3').addEventListener('mouseout',()=>{
    document.querySelector('.p3').style.display='none';
});

document.querySelector('#a4').addEventListener('mouseover',()=>{
    document.querySelector('.p4').style.display='flex';
    document.querySelector('.p4').style.marginTop='13.5vw';
});
document.querySelector('#a4').addEventListener('mouseout',()=>{
    document.querySelector('.p4').style.display='none';
});

document.querySelector('#a5').addEventListener('mouseover',()=>{
    document.querySelector('.p5').style.display='flex';
    document.querySelector('.p5').style.marginTop='17.5vw';
});
document.querySelector('#a5').addEventListener('mouseout',()=>{
    document.querySelector('.p5').style.display='none';
});