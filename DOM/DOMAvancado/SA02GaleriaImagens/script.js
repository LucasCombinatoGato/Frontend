// Galeria de imagens dinâmicas -> DOM

// Pegando elementos do HTML
let uploadInput = document.querySelector("#upload");
let btnAdd = document.querySelector("#addImage");
let galeria = document.querySelector(".galeria");
let carrossel = document.querySelector(".carrossel");

// Vetor das imagens
let imagens = [];

btnAdd.addEventListener("click",()=>{
    let imageURL = uploadInput.value.trim();
    if(imageURL === "")return; // Se a imagem estiver vazia, interrompe o método
    //continuo
    imagens.push(imageURL); // Adicionando o link das imagens ao vetor de imagens
    atualizarGaleria(); // Recarrega a galeria
    atualizarCarrossel(); // Recarrega o carrossel
    uploadInput.value = ""; // Limpa o input
});

// Atualizar a galeria
function atualizarGaleria(){
    galeria.innerHTML = ""; // Limpando a galeria
    // Percorrer o meu vetor de imagens
    imagens.forEach(
        (imagem, index)=>{
            let div = document.createElement("div"); // div
            div.classList.add("imagemContainer");
            let img = document.createElement("img"); // div
            img.src = imagem; // add url a img
            let btnRemove = document.createElement("button");
            btnRemove.innerText = "X"; // Adiciona um 'x' no botão
            btnRemove.classList.add("remove");
            btnRemove.addEventListener("click",()=>{
                imagens.splice(index, 1);
                atualizarGaleria(); // Recursão
                atualizarCarrossel();
            });
            div.appendChild(img);
            div.appendChild(btnRemove);
            galeria.appendChild(div);
        }
    )
}

// Atualizar o Carrossel
function atualizarCarrossel(){
    carrossel.innerHTML = ""; // Limpa o carrossel
    imagens.forEach(imagem=>{
        let img = document.createElement("img");
        img.src = imagem;
        img.style.width = "100%";
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length*100}%`
    inicialCarrossel(); // Função para iniciar o carrossel
}

// Iniciar o carrossel
function inicialCarrossel() {
    let index = 0;
    setInterval(()=>{
        index = (index+1)%imagens.length;
        carrossel.style.transition = `transform ${(1+imagens.length)/imagens.length}s ease-in-out`;
        carrossel.style.transform = `translateX(-${index*100/imagens.length}%)`;
    }, 2000);
}