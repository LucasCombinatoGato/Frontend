// Adicionar elementos com DOM

// Exemplo de criação de objetos com DOM
let header = document.createElement("header");
// Estilização do elemento
header.style.backgroundColor = "#222";
header.style.height = "13vh";
// Adicionar elemento ao body
document.body.appendChild(header); // Adicionando o header como elemento filho do body
// Estilização do body
document.body.style.margin = "0"; // Tira a margem padrão do body

// Adicionar elementos ao header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.height = "100%";
divNav.style.color = "aliceblue";
divNav.style.alignItems = "center";
divNav.style.fontSize = "3.5vh";
divNav.style.fontFamily = "Comic Sans MS";

header.appendChild(divNav); // Adicionando divNav como elemento fliho do header

let itensNav = ["Home", "Produtos", "Contato"];
// Adicionar itens na nav
itensNav.forEach((e) => {
  let item = document.createElement("a");
  item.innerText = e;
  item.href = e.toLowerCase()+".html";
  item.style.textDecoration = "none";
  item.style.color = "aliceblue";
  divNav.appendChild(item);
});

// Façam um footer com DOM

let footer = document.createElement("footer");
footer.style.backgroundColor = "red";
footer.style.height = "5vh";
footer.style.width = "100%";
footer.style.color = "white";
footer.style.position = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.textAlign = "center"
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.height = "10%";
footer.style.fontSize = "5vh";
footer.style.bottom = "0";
document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.fontSize = "3vh";
divFooter.style.fontFamily = "Comic Sans MS";
divFooter.innerText = "Copyright © 2026 - Todos os direitos reservados.";
footer.appendChild(divFooter);

// Clonar elementos com DOM
let card = document.createElement("div");
card.classList.add("card");//adiciona a Class Card no elemento => <div class="card">
card.style.width = "120px"; //largura
card.style.height = "200px"; //altura
card.style.backgroundColor = "blue"
card.style.margin = "1px";

// Criar um container para adicionar os cards
let container = document.createElement("div");
container.classList.add("container"); //=> div.container
container.style.display="flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width="90%";
container.style.flexWrap = "wrap" // quebra a linha dos elementos filhos

// Criar um botão para clonar as div.card
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar"; //adicionando um id para o botão
document.body.appendChild(btnClonar); //add btn ao body
document.body.appendChild(container); //add container ao body
container.appendChild(card);//add card ao container

// Criar um método para adicionar evento ao btn
btnClonar.addEventListener("click", ()=>{
    let clonar = card.cloneNode(true); // Clonar o card
    container.appendChild(clonar);
})

// Criar uma chave de modo claro e escuro
let chave = document.createElement("input"); // Tipo input
chave.type = "checkbox";
chave.id = "darkMode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px"; // Chave topo a direita

document.body.appendChild(chave); // Add chave ao body

// Criando evento para chave
chave.addEventListener("change", ()=>{
  document.body.classList.toggle("darkMode");
})
