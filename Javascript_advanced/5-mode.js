#!/usr/bin/node
'use strict';
// function changemode
function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}
function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const para = document.createElement('p');
  para.innerText = 'Welcome Holberton!';
  document.body.appendChild(para);

  const spookyBtn = document.createElement('button');
  const text = document.createTextNode('Spooky');
  spookyBtn.appendChild(text);
  document.body.appendChild(spookyBtn);
  spookyBtn.addEventListener('click', spooky);

  const darkBtn = document.createElement('button');
  const darkText = document.createTextNode('Dark mode');
  darkBtn.appendChild(darkText);
  document.body.appendChild(darkBtn);
  darkBtn.addEventListener('click', darkMode);

  const screamBtn = document.createElement('button');
  const screamText = document.createTextNode('Scream mode');
  screamBtn.appendChild(screamText);
  screamBtn.addEventListener('click', screamMode);
  document.body.appendChild(screamBtn);
}
main();
