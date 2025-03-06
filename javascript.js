const container = document.querySelector("div");
const btn = document.querySelector("button");
let userInput = 0;

btn.addEventListener("click", () => {
    userInput = prompt("Enter a height value");
    makeGrid(userInput);
});

function makeGrid(userInput) {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    let gridAmount = userInput * userInput;
    let gridHeight = 500 / userInput + "px";
    let gridWidth = 500 / userInput + "px";
    for (let i = 0; i < gridAmount; i++) {
        let div = document.createElement("div");
        div.style.height = gridHeight;
        div.style.width = gridWidth;
        div.style.backgroundColor = "lightgrey";
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "cyan";
        })
        container.appendChild(div);
    }
}