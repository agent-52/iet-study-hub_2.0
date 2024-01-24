const subjectslist1 = document.querySelector('.transparent-text');

const mathHeading = document.querySelector('.math1');
const mathImage = document.querySelector('.math-image');

const emeHeading = document.querySelector('.eme');
const emeImage = document.querySelector('.eme-image');

const electronicsHeading = document.querySelector('.basicelectronics');
const electronicsImage = document.querySelector('.electronics-image');

const chemistryHeading = document.querySelector('.chemistry');
const chemistryImage = document.querySelector('.chemistry-image');

const englishHeading = document.querySelector('.english');
const englishImage = document.querySelector('.english-image')

const math2Heading = document.querySelector('.math2');
const math2Image = document.querySelector('.math2-image');

const edHeading = document.querySelector('.ed');
const edImage = document.querySelector('.ed-image');

const eeHeading = document.querySelector('.electrical-engineering');
const eeImage = document.querySelector('.electrical-engineering-image');

const physicsHeading = document.querySelector('.physics');
const physicsImage = document.querySelector('.physics-image');

const humanitiesHeading = document.querySelector('.humanities');
const humanitiesImage = document.querySelector('.humanities-image');

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





math2Heading.addEventListener('mouseenter', () => {
  math2Image.classList.remove('hidden')
  math2Image.classList.add('visible')
  physicsImage.classList.remove('visible')
  physicsImage.classList.add('hidden')
  eeImage.classList.remove('visible')
  eeImage.classList.add('hidden')
  edImage.classList.remove('visible')
  edImage.classList.add('hidden')
  humanitiesImage.classList.remove('visible')
  humanitiesImage.classList.add('hidden')
  
 
})

edHeading.addEventListener('mouseenter', () => {
  edImage.classList.remove('hidden')
  edImage.classList.add('visible')
  physicsImage.classList.remove('visible')
  physicsImage.classList.add('hidden')
  eeImage.classList.remove('visible')
  eeImage.classList.add('hidden')
  math2Image.classList.remove('visible')
  math2Image.classList.add('hidden')
  humanitiesImage.classList.remove('visible')
  humanitiesImage.classList.add('hidden')
 
})

eeHeading.addEventListener('mouseenter', () => {
  eeImage.classList.remove('hidden')
  eeImage.classList.add('visible')
  physicsImage.classList.remove('visible')
  physicsImage.classList.add('hidden')
  edImage.classList.remove('visible')
  edImage.classList.add('hidden')
  math2Image.classList.remove('visible')
  math2Image.classList.add('hidden')
  humanitiesImage.classList.remove('visible')
  humanitiesImage.classList.add('hidden')
  
})

physicsHeading.addEventListener('mouseenter', () => {
  physicsImage.classList.remove('hidden')
  physicsImage.classList.add('visible')
  eeImage.classList.remove('visible')
  eeImage.classList.add('hidden')
  edImage.classList.remove('visible')
  edImage.classList.add('hidden')
  math2Image.classList.remove('visible')
  math2Image.classList.add('hidden')
  humanitiesImage.classList.remove('visible')
  humanitiesImage.classList.add('hidden')
  
})

humanitiesHeading.addEventListener('mouseenter', () => {
  humanitiesImage.classList.remove('hidden')
  humanitiesImage.classList.add('visible')
  physicsImage.classList.remove('visible')
  physicsImage.classList.add('hidden')
  eeImage.classList.remove('visible')
  eeImage.classList.add('hidden')
  edImage.classList.remove('visible')
  edImage.classList.add('hidden')
  math2Image.classList.remove('visible')
  math2Image.classList.add('hidden')
  
})

