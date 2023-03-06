// let hamburgerMenu = document.querySelector('.menu');
// let popUpMenu = document.createElement('div');
// let unorderedList = document.createElement('ul');
// //
// let liOne = document.createElement('li');
// liOne.innerText = 'X';
// document.unorderedList.appendChild(liOne);
// //

// let liTwo = document.createElement('li');
// liTwo.innerText = 'Portfolio';
// document.unorderedList.appendChild(liTwo);

// //
// document.popUpMenu.appendChild(unorderedList);
// document.body.appendChild(popUpMenu);
// //

// // let nl = ["X", "Portfolio", "About", "Contact"];
// // for (let i = 0; i < 4; i++) {
// //   // nl[i] = document.createElement('li');
// //   console.log(n1[i]);
// // }

// console.log(nl);

// hamburgerMenu.addEventListener('click', () => {
//   console.log('checkbutton');
//   document.body.style.backgroundColor = '#6070ff';
//   document.body.style.backdropFilter = 'blur(5rem)';
// });

// /* <div class="popUpMenu">
//   <ul>
//     <li>X</li>
//     <li>Portfolio</li>
//     <li>About</li>
//     <li>Contact</li>
//   </ul>
// </div>; */

/* chatGPT code */

let hamburgerMenu = document.querySelector('.menu');
let popUpMenu = document.createElement('div');
let unorderedList = document.createElement('ul');

let liOne = document.createElement('li');
liOne.innerText = 'X';
unorderedList.appendChild(liOne);

let liTwo = document.createElement('li');
liTwo.innerText = 'Portfolio';
unorderedList.appendChild(liTwo);

popUpMenu.appendChild(unorderedList);
document.body.appendChild(popUpMenu);

popUpMenu.innerHTML = `
  <div class="popUpMenu">
    <ul>
      <li>X</li>
      <li>Portfolio</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
`;

console.log(nl);

hamburgerMenu.addEventListener('click', () => {
  console.log('checkbutton');
  document.body.style.backgroundColor = '#6070ff';
  document.body.style.backdropFilter = 'blur(5rem)';
});
