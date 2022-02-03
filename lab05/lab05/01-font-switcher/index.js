fontSize = 1.4

const makeBigger = () => {
   // alert('make bigger!');
   fontSize = fontSize+0.5
   document.querySelector(".content").style.fontSize = `${fontSize}em`;
};

const makeSmaller = () => {
   // alert('make smaller!');
   fontSize = fontSize-0.5
   document.querySelector(".content").style.fontSize = `${fontSize}em`;
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

