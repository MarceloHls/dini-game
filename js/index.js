
let gameover = false;


main();

function main() {
    
    const game = document.querySelector(".game");
    Cactus.dino = new Dino(game);
    Cactus.score = new Score(game);
    Cactus.game = document.querySelector(".game");
    Cactus.velocity = 10;

    new Cactus();
};

function gameRules(punctuation) {
    if (punctuation == 10) {
        
        Cactus.velocity -= 0.5;
        Score.difficulty = "Medio";
        
    } else if (punctuation == 30) {
        Cactus.velocity -= 0.5;
        Score.difficulty = "Dificil";
    } else if (punctuation == 50) {
        Cactus.velocity -= 0.5;
        Score.difficulty = "Muito Dificil";
    } else if (punctuation == 60) {
        Cactus.velocity -= 0.5;
        Score.difficulty = "Impossivel";

    }
}










