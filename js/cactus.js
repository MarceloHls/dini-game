class Cactus {
    element;
    position;
    punctuationAdd = false;
    static score;
    static game;
    static dino;
    static velocity;

    constructor() {
        this.element = document.createElement('div');
        this.position = 600;
        this.element.style.left = `${this.position}px`;
        this.element.classList.add('cactus');
        Cactus.game.appendChild(this.element);

        this.moviment();
        this.newCactus();


    }
    start() {
    }

    newCactus() {
        const max = 1.5 * Cactus.velocity * 110;
        const min = 0.7 * Cactus.velocity * 110;
        const random = Math.random() * (max - min) + min;
        if (!gameover) {
            setTimeout(() => new Cactus(), random)
        }
    }

    moviment() {
        const movimentCactus = setInterval(() => {
            if (!gameover) {

                if (this.position <= 190 && this.position >= 120 && Cactus.dino.position < 60) {
                    gameover = true;
                    clearInterval(movimentCactus);
                    new CreateGamerOver(Cactus.game)
                } else {
                    if (this.position <= 120 && this.position >= 115 && !this.punctuationAdd) {
                        Cactus.score.updateScore()
                        this.punctuationAdd = true;
                    }
                    if (this.position <= -120) {
                        Cactus.game.removeChild(this.element);
                        clearInterval(movimentCactus);
                    } else {
                        this.position -= 3;
                        this.element.style.left = this.position + "px"
                    }
                }
            }
        }, Cactus.velocity);
    }
}