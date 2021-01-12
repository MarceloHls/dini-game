class Score {
    static punctuation = 0;
    static difficulty = "Facil"
    nivel;
    score;
    constructor(game) {
        const div = document.createElement('div')
        div.classList.add("score-dificuty")
        this.nivel = document.createElement('p');
        this.score = document.createElement('p');

        this.score.innerText = `Pontuacao: ${Score.punctuation} `
        this.nivel.innerText = `Nivel : ${Score.difficulty} `

        div.appendChild(this.score)
        div.appendChild(this.nivel)

        game.appendChild(div);

    }
    updateScore() {
        Score.punctuation++;
        gameRules(Score.punctuation);
        this.score.innerText = `Pontuacao: ${Score.punctuation}`;
        this.nivel.innerText = `Nivel : ${Score.difficulty} `
       
    }
}