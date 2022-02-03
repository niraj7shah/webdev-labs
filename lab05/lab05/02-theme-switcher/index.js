/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const desertColor = () => {
   document.querySelector("body").classList.remove('ocean');
   document.querySelector("body").classList.remove('high-contrast');
   document.querySelector("body").classList.add('desert');
};

const oceanColor = () => {
   document.querySelector("body").classList.add('ocean');
   document.querySelector("body").classList.remove('desert');
   document.querySelector("body").classList.remove('high-contrast');
};

const highContrast = () => {
   document.querySelector("body").classList.add('high-contrast');
   document.querySelector("body").classList.remove('desert');
   document.querySelector("body").classList.remove('ocean');
};

const d = () => {
   document.querySelector("body").classList.remove('high-contrast');
   document.querySelector("body").classList.remove('desert');
   document.querySelector("body").classList.remove('ocean');
};

document.querySelector("#desert").addEventListener('click', desertColor);
document.querySelector("#ocean").addEventListener('click', oceanColor);
document.querySelector("#high-contrast").addEventListener('click', highContrast);
document.querySelector("#default").addEventListener('click', d);