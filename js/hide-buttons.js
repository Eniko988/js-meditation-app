

document.addEventListener('DOMContentLoaded',()=>{
    app();
    deactiveApp();
});

const app =() =>{
const app = document.querySelector(".app");

const inactiveTime = 3000; 

let mouseLastMoveTime = new Date();

document.addEventListener('mousemove',()=>{

     mouseLastMoveTime = new Date();
    app.classList.remove('inactive');
    document.body.style.cursor ="auto";
});
}

const deactiveApp = ()=>{
const inactiveTime = 3000;
let now = new Date();
let mouseLastMoveTime = new Date();
let deltaTime = now -mouseLastMoveTime;

if (deltaTime >= inactiveTime){
    app.classList.add('inactive');
    document.body.style.cursor ="auto";
}
window.requestAnimationFrame(deactiveApp);
}
deactiveApp();




