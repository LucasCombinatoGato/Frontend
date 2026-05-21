// Criar eventos avançados com DOM

// Evento para capturar a tecla digitada
// Evento do documento como um todo (não é de um elemento específico)
document.addEventListener("keydown", (event)=>{
    console.log("Tecla pressionada: "+event.key);
})

let input = document.createElement("input");
input.type = "text";
input.id = "buscar";
input.placeholder = "Digite para buscar...";

document.body.appendChild(input);

// Lista de sugestões
let lista = document.createElement ("ul");
lista.id = "sugestoes";
lista.style.listStyle = "none";
document.body.appendChild(lista);

// Criar o vetor de sugestões
let sugestoes = [
    "JavaScript", "Java", "Python", "C#", "PHP", "Dart", "Flutter", "Flutter", "Kotlin", "Ruby", "Go", "Rust", "Swift", "Laravel"
];

// Evento para capturar o testo e sugerir do vetor
document.getElementById("buscar").addEventListener("keypress", ()=>{
    let texto = input.value.toLowerCase();
    lista.innerHTML = "";
    sugestoes.forEach(sugestao => {
        if (sugestao.toLowerCase().includes(texto)){
            let item = document.createElement("li");

            // Adicionar item a lista de sugestões
            // porém se um item for clicado - Auto completar
            item.style.cursor = "pointer";
            item.addEventListener("click", ()=>{
                input.value = sugestao;
                lista.innerHTML="";
            });
            item.innerText = sugestao;
            lista.appendChild(item);
        }
    })
})

