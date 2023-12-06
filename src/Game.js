import generateSecretNumbers from "./utils/generateSecretNumbers.js";
import OutputView from "./view/OutputView.js";
import InputView from "./view/InputView.js";
import compareNumbers from "./utils/compareNumbers.js";

class Game {
  #secretNumbers;
  #scoreBoard;
  #isPlaing;

  constructor() {
    this.#secretNumbers = generateSecretNumbers();
    this.#isPlaing = true;
  }

  async playBall() {
    OutputView.printStartMessage();
    const userInput = await InputView.getUserNumbers();
    this.#scoreBoard = compareNumbers(userInput, this.#secretNumbers);
  }
}

export default Game;
