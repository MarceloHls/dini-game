class CreateGamerOver {
    constructor(game) {
        game.innerHTML+= `
        <div class='gameover'>
            <h1> Game over</h1>
            <h6>Pontos :  ${Score.punctuation}</h6>
            <button onclick = 'CreateGamerOver.restart()'> Jogar novamente </button>
            </div>
        `;
        const a = document.querySelector('.background');
        a.innerHTML = ""
        a.style.background = 'url("./background.png")'
        
    }
    static restart() {
        window.location.reload()
    }
}
