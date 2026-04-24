const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const li = document.createElement("li");
  li.textContent = "Terminal";
  li.classList.add("special");
  const ul = document.querySelector("ul");
  ul.appendChild(li);

  const li2 = document.createElement("li");
  li2.textContent = "Node";
  li2.classList.add("special");
  ul.appendChild(li2);

  const li3 = document.createElement("li");
  li3.textContent = "OOP";
  li3.classList.add("special");
  ul.appendChild(li3);

  const li4 = document.createElement("li");
  li4.textContent = "TypeScript";
  li4.classList.add("special");
  ul.appendChild(li4);

  const li5 = document.createElement("li");
  li5.textContent = "CSS";
  li5.classList.add("special");
  ul.appendChild(li5);

  const li6 = document.createElement("li");
  li6.textContent = "DOM";
  li6.classList.add("special");
  ul.appendChild(li6);
    
}

main();


