const subjectslist1 = document.querySelector('.transparent-text1');

const subjectslist2 = document.querySelector('.transparent-text2');

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

document.querySelector('.math1').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("light-white-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.math1').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("light-white-outline");
});

document.querySelector('.math2').addEventListener('mouseenter', () => {
  subjectslist2.classList.add("light-white-outline");
  subjectslist2.classList.remove("orange-outline");
});

document.querySelector('.math2').addEventListener('mouseleave', () => {
  subjectslist2.classList.add("orange-outline");
  subjectslist2.classList.remove("light-white-outline");
});

document.querySelector('.cp').addEventListener('mouseenter', () => {
  subjectslist2.classList.add("yellow-outline");
  subjectslist2.classList.remove("orange-outline");
});

document.querySelector('.cp').addEventListener('mouseleave', () => {
  subjectslist2.classList.add("orange-outline");
  subjectslist2.classList.remove("yellow-outline");
});

document.querySelector('.eme').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("white-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.eme').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("white-outline");
});

document.querySelector('.ed').addEventListener('mouseenter', () => {
  subjectslist2.classList.add("white-outline");
  subjectslist2.classList.remove("orange-outline");
});

document.querySelector('.ed').addEventListener('mouseleave', () => {
  subjectslist2.classList.add("orange-outline");
  subjectslist2.classList.remove("white-outline");
});



document.querySelector('.basicelectronics').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("more-white-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.basicelectronics').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("more-white-outline");
});

document.querySelector('.electrical-engineering').addEventListener('mouseenter', () => {
  subjectslist2.classList.add("more-white-outline");
  subjectslist2.classList.remove("orange-outline");
});

document.querySelector('.electrical-engineering').addEventListener('mouseleave', () => {
  subjectslist2.classList.add("orange-outline");
  subjectslist2.classList.remove("more-white-outline");
});



document.querySelector('.chemistry').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("more-orange-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.chemistry').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("more-orange-outline");
});


document.querySelector('.physics').addEventListener('mouseenter', () => {
  subjectslist2.classList.add("more-orange-outline");
  subjectslist2.classList.remove("orange-outline");
});

document.querySelector('.physics').addEventListener('mouseleave', () => {
  subjectslist2.classList.add("orange-outline");
  subjectslist2.classList.remove("more-orange-outline");
});



document.querySelector('.english').addEventListener('mouseenter', () => {
  subjectslist1.classList.add("light-blue-outline");
  subjectslist1.classList.remove("orange-outline");
});

document.querySelector('.english').addEventListener('mouseleave', () => {
  subjectslist1.classList.add("orange-outline");
  subjectslist1.classList.remove("light-blue-outline");
});

document.querySelector('.humanities').addEventListener('mouseenter', () => {
  subjectslist2.classList.add("light-blue-outline");
  subjectslist2.classList.remove("orange-outline");
});

document.querySelector('.humanities').addEventListener('mouseleave', () => {
  subjectslist2.classList.add("orange-outline");
  subjectslist2.classList.remove("light-blue-outline");
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

