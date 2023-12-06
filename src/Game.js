import generateSecretNumbers from "./utils/generateSecretNumbers.js";
import OutputView from "./view/OutputView.js";
import InputView from "./view/InputView.js";
import compareNumbers from "./utils/compareNumbers.js";
import NUMBERS from "./constants/numbers.js";

class Game {
  #secretNumbers;
  #scoreBoard;
  #isPlaying;

  constructor() {
    this.#secretNumbers = generateSecretNumbers();
    this.#isPlaying = true;
  }

  async playBall() {
    console.log(this.#secretNumbers);
    OutputView.printStartMessage();
    const userInput = await InputView.getUserNumbers();
    this.#scoreBoard = compareNumbers(userInput, this.#secretNumbers);
    OutputView.printHint(this.#scoreBoard);
    this.endGame(this.#scoreBoard);
  }

  endGame(scoreBoard) {
    if (scoreBoard.strike === NUMBERS.WIN) {
      OutputView.printWin();
      this.#isPlaying = false;
    }
  }
}

export default Game;
