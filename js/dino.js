class Dino {
    jumpping = false;
    position = 0;
    dinoElement;
    constructor(game) {
        this.dinoElement = document.createElement('div');
        this.dinoElement.classList.add('dino');
        game.appendChild(this.dinoElement);
        this.moviments();

    }
    moviments() {
        document.addEventListener("keydown", event => {
            if (event.code == "Space") {
                this.jump()
            }
        });
    }

    jump() {
        if (this.jumpping) {
            return;
        }

        this.jumpping = true;
        const jump = setInterval(() => {
            if (!gameover) {
                if (this.position <= 150) {
                    this.position += 20;
                    this.dinoElement.style.bottom = `${this.position}px`

                } else {
                    clearInterval(jump)
                    this.down();
                }
            }

        }, 20);
    }

    down() {
        const down = setInterval(() => {
            if (!gameover) {
                if (this.position >= 10) {
                    this.position -= 20;
                    this.dinoElement.style.bottom = `${this.position}px`;
                } else {
                    clearInterval(down)
                    this.jumpping = false;
                }
            }

        }, 60);


    }


}