// CHANGE THE NAV STYLE ON SCROLL
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

//=========== MAKING THE NAV RESPONSIVE ========== 
const nav = document.querySelector('.nav-links');
const openNavBtn = document.querySelector('#nav-toggle-open');
const closeNavBtn = document.querySelector('#nav-toggle-close');


const openNav = () =>{
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
openNavBtn.addEventListener('click', openNav);

const closeNav = () =>{
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav);
nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav); 
});

// ========= POINTER EFFECT ==========
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e) {
 cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX
 + "px; top: " + e.clientY + "px;";
}) 