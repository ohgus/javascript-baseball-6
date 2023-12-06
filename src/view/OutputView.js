import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";

class OutputView {
  static printStartMessage() {
    Console.print(MESSAGE.PRINT.START);
  }
}

export default OutputView;
