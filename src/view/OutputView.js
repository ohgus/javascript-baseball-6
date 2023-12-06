import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";
import NUMBERS from "../constants/numbers.js";

class OutputView {
  static printStartMessage() {
    Console.print(MESSAGE.PRINT.START);
  }

  static printHint(scoreBoard) {
    if (scoreBoard.strike === NUMBERS.WIN) {
      Console.print(`${scoreBoard.strike}${MESSAGE.HINT.STRIKE}`);
    } else if (scoreBoard.strike !== 0 && scoreBoard.ball !== 0) {
      Console.print(
        `${scoreBoard.ball}${MESSAGE.HINT.BALL} ${scoreBoard.strike}${MESSAGE.HINT.STRIKE}`
      );
    } else if (scoreBoard.strike !== 0 && scoreBoard.ball === 0) {
      Console.print(`${scoreBoard.strike}${MESSAGE.HINT.STRIKE}`);
    } else if (scoreBoard.strike === 0 && scoreBoard.ball !== 0) {
      Console.print(`${scoreBoard.ball}${MESSAGE.HINT.BALL}`);
    } else {
      Console.print(MESSAGE.HINT.NOTHING);
    }
  }
}

export default OutputView;
