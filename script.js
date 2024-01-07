const yearlist = document.querySelector('.nav-list');
const yearheading = document.querySelector('.years');

yearheading.addEventListener('mouseenter', ()=>{
  yearlist.classList.add("visible");
});

document.querySelector('ul').addEventListener('mouseenter', ()=>{
  yearlist.classList.add("visible");
});

yearheading.addEventListener('mouseleave', ()=>{
  yearlist.classList.remove("visible");
});

document.querySelector('ul').addEventListener('mouseleave', ()=>{
  yearlist.classList.remove("visible");
});

