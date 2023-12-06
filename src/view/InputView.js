import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";

class InputView {
  static async readUserNumbers() {
    const userNumbers = await Console.readLineAsync(MESSAGE.READ.USER_NUMBER);
    return userNumbers;
  }

  static async getUserNumbers() {
    const numbers = await this.readUserNumbers();
    return numbers;
  }
}

export default InputView;
