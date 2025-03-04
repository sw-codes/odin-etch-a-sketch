const container = document.querySelector("div");

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.border = "solid";
    div.style.backgroundColor = "pink";
    div.style.margin = "5px";
    container.appendChild(div);
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.style.height = "100px";
        div.style.width = "100px";
        div.style.border = "solid";
        div.style.backgroundColor = "pink";
        div.style.margin = "5px";
        container.appendChild(div);
    }
}