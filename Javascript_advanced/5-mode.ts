#!/usr/bin/node

// function changemode
function changeMode(size: number, weight: string, transform: string, background: string, color: string){
    return function () {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main (){
    let spooky = changeMode(9 , 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    
    const para = document.createElement('p')
    para.innerText = 'Welcome Holberton!'
    document.body.appendChild(para);

    const spookyBtn = document.createElement('button');
    const text = document.createTextNode('Spooky');
    spookyBtn.appendChild(text);
    spookyBtn.addEventListener('onclick', spooky)


    const darkBtn = document.createElement('button');
    const darkText = document.createTextNode('Dark mode');
    darkBtn.appendChild(darkText);
    darkBtn.addEventListener('onClick', darkMode)

    const screamBtn = document.createElement('button');
    const screamText = document.createTextNode('Scream mode');
    screamBtn.appendChild(screamText);
    screamBtn.addEventListener("onClick", screamMode)

}
main();