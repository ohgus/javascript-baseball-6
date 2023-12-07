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
    OutputView.printStartMessage();

    while (this.#isPlaying) {
      const userInput = await InputView.getUserNumbers();
      this.#scoreBoard = compareNumbers(userInput, this.#secretNumbers);
      OutputView.printHint(this.#scoreBoard);
      await this.endGame(this.#scoreBoard);
    }
  }

  async endGame(scoreBoard) {
    if (scoreBoard.strike === NUMBERS.WIN) {
      OutputView.printWin();
      await this.restartGame();
    }
  }

  async restartGame() {
    const num = await InputView.getRestartInput();

    if (num === NUMBERS.RESTART.AGREE) {
      this.#secretNumbers = generateSecretNumbers();
      this.#isPlaying = true;
    } else if (num === NUMBERS.RESTART.DISAGREE) {
      this.#isPlaying = false;
    }
  }
}

export default Game;
