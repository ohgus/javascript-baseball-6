import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.PRINT.START);
  },
};

export default OutputView;
