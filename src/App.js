import Game from "./Game.js";

class App {
  #baseballGame;

  constructor() {
    this.#baseballGame = new Game();
  }
  async play() {
    this.#baseballGame.playBall();
  }
}

export default App;

const app = new App();
app.play();
