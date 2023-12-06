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
    // console.log(this.#secretNumbers);
    OutputView.printStartMessage();
    const userInput = await InputView.getUserNumbers();
    this.#scoreBoard = compareNumbers(userInput, this.#secretNumbers);
    OutputView.printHint(this.#scoreBoard);
  }
}

export default Game;
