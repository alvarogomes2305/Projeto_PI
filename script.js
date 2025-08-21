class Personagem {
    // Atributos
    elemento;
    passo = 5;
    posX = 0;
    posY = 0;
    limiteX = 600; // largura do container
    limiteY = 400; // altura do container

    //* Construtor chamar id do index
    constructor(nome) {
        this.elemento = document.getElementById(nome)
    }

    // Métodos atualizar tela
    atualizarTela() {
        this.elemento.style.left = this.posX + "px";
        this.elemento.style.top = this.posY + "px";
    }

    // Metodo de posicao aleatoria
    posicaoAleatoria() {
        this.posX = Math.random() * 570;
        this.posY = Math.random() * 370;
        this.atualizarTela();
    }

    // Método se mexer
    mover(direcao) {
        switch (direcao) {
            case "cima":
                this.posY -= this.passo;
                break;
            case "baixo":
                this.posY += this.passo;
                break;
            case "direita":
                this.posX += this.passo;
                break;
            case "esquerda":
                this.posX -= this.passo;
                break;

        }

        this.atualizarTela();

    }

}

// Instanciando um objeto do tipo Personagem
const personagem = new Personagem("personagem");

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            personagem.mover("cima");
            break;
        case "ArrowDown":
            personagem.mover("baixo");
            break;
        case "ArrowRight":
            personagem.mover("direita");
            break;
        case "ArrowLeft":
            personagem.mover("esquerda");
            break;

    }
});

//objeto npc
const npc = new Personagem("npc");
npc.posicaoAleatoria();
