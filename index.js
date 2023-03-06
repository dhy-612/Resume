let hamburgerMenu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
console.log("checkbutton")
  document.body.style.backgroundColor = '#6070ff';
  document.body.style.backdropFilter = "blur(5rem)";
});