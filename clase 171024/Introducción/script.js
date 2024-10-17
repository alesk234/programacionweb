document.title='Clase de Java Script'

console.log(document.title);

const h1 = document.createElement("h1");
h1.textContent='Mi texto desde Java Script';
document.body.appendChild(h1);
console.log(h1);

const parrafo = document.createElement("p");
parrafo.textContent = "Mi segundo texto desde JS";
document.body.appendChild(parrafo);

