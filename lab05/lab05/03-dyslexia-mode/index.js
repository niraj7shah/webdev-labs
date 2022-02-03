/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

dyslexia = true;

const toggleDyslexia = () => {
  if (!dyslexia){
    document.querySelector("body").classList.remove('dyslexia-mode');
    dyslexia = true;
  } else {
    document.querySelector("body").classList.add('dyslexia-mode');
    dyslexia = false;
  }
  console.log(dyslexia)

};

document.querySelector("#dyslexia-toggle").addEventListener('click', toggleDyslexia);