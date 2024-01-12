const subjectslist1 = document.querySelector('.transparent-text');

document.querySelector('.light-white-subject').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("light-white-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.light-white-subject').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("light-white-outline");
});



document.querySelector('.white-subject').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("white-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.white-subject').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("white-outline");
});




document.querySelector('.more-white-subject').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("more-white-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.more-white-subject').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("more-white-outline");
});



document.querySelector('.orange-subject').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("more-orange-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.orange-subject').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("more-orange-outline");
});



document.querySelector('.light-blue-subject').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("light-blue-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.light-blue-subject').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("light-blue-outline");
});