import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";
import Validator from "../utils/validator.js";

class InputView {
  static async readUserNumbers() {
    const userNumbers = await Console.readLineAsync(MESSAGE.READ.USER_NUMBER);
    return userNumbers;
  }

  static async getUserNumbers() {
    try {
      const numbers = await this.readUserNumbers();
      Validator.validateGameNumbers(numbers);
      return numbers;
    } catch (e) {
      Console.print(e.message);
      return await this.getUserNumbers();
    }
  }
}

export default InputView;
