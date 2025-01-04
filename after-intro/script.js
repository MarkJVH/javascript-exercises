// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const p = document.createElement("p");
p.classList.add("content");
p.textContent = "Hey I’m red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.classList.add("content");
h3.textContent =  "I’m a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.setAttribute("id", "pink-div")
div.style.backgroundColor = "pink";
div.style.borderColor = "black";

const h1 = document.createElement("h1");
h1.textContent =  "I’m in a div";

const p2 = document.createElement("p");
p2.textContent =  "ME TOO!";

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

const container2 = document.querySelector("#pink-div");

container2.appendChild(h1);
container2.appendChild(p2); 

const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });