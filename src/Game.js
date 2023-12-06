import generateSecretNumbers from "./utils/generateSecretNumbers.js";

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
}
