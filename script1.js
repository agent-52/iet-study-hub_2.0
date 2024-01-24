const subjectslist1 = document.querySelector('.transparent-text');

const mathHeading = document.querySelector('.light-white-subject');
const mathImage = document.querySelector('.math-image');

const emeHeading = document.querySelector('.white-subject');
const emeImage = document.querySelector('.eme-image');

const electronicsHeading = document.querySelector('.more-white-subject');
const electronicsImage = document.querySelector('.electronics-image');

const chemistryHeading = document.querySelector('.orange-subject');
const chemistryImage = document.querySelector('.chemistry-image');

const englishHeading = document.querySelector('.light-blue-subject');
const englishImage = document.querySelector('.english-image')

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

mathHeading.addEventListener('mouseenter', () => {
  mathImage.classList.remove('hidden')
  mathImage.classList.add('visible')
  chemistryImage.classList.remove('visible')
  chemistryImage.classList.add('hidden')
  electronicsImage.classList.remove('visible')
  electronicsImage.classList.add('hidden')
  emeImage.classList.remove('visible')
  emeImage.classList.add('hidden')
  englishImage.classList.remove('visible')
  englishImage.classList.add('hidden')
  
 
})

emeHeading.addEventListener('mouseenter', () => {
  emeImage.classList.remove('hidden')
  emeImage.classList.add('visible')
  chemistryImage.classList.remove('visible')
  chemistryImage.classList.add('hidden')
  electronicsImage.classList.remove('visible')
  electronicsImage.classList.add('hidden')
  mathImage.classList.remove('visible')
  mathImage.classList.add('hidden')
  englishImage.classList.remove('visible')
  englishImage.classList.add('hidden')
 
})

electronicsHeading.addEventListener('mouseenter', () => {
  electronicsImage.classList.remove('hidden')
  electronicsImage.classList.add('visible')
  chemistryImage.classList.remove('visible')
  chemistryImage.classList.add('hidden')
  emeImage.classList.remove('visible')
  emeImage.classList.add('hidden')
  mathImage.classList.remove('visible')
  mathImage.classList.add('hidden')
  englishImage.classList.remove('visible')
  englishImage.classList.add('hidden')
  
})

chemistryHeading.addEventListener('mouseenter', () => {
  chemistryImage.classList.remove('hidden')
  chemistryImage.classList.add('visible')
  electronicsImage.classList.remove('visible')
  electronicsImage.classList.add('hidden')
  emeImage.classList.remove('visible')
  emeImage.classList.add('hidden')
  mathImage.classList.remove('visible')
  mathImage.classList.add('hidden')
  englishImage.classList.remove('visible')
  englishImage.classList.add('hidden')
  
})

englishHeading.addEventListener('mouseenter', () => {
  englishImage.classList.remove('hidden')
  englishImage.classList.add('visible')
  chemistryImage.classList.remove('visible')
  chemistryImage.classList.add('hidden')
  electronicsImage.classList.remove('visible')
  electronicsImage.classList.add('hidden')
  emeImage.classList.remove('visible')
  emeImage.classList.add('hidden')
  mathImage.classList.remove('visible')
  mathImage.classList.add('hidden')
  
})

