import generateSecretNumbers from "./utils/generateSecretNumbers.js";
import OutputView from "./view/OutputView.js";
import InputView from "./view/InputView.js";

class Game {
  #secretNumbers;
  #scoreBoard;
  #isPlaing;

  constructor() {
    this.#secretNumbers = generateSecretNumbers();
    this.#scoreBoard = {
      strike: 0,
      ball: 0,
    };
    this.#isPlaing = true;
  }

  async playBall() {
    OutputView.printStartMessage();
    const userInput = await InputView.getUserNumbers();
  }
}

export default Game;
