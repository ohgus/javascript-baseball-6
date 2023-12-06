import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/messages.js";

const InputView = {
  async getUserNumbers() {
    const userNumbers = await Console.readLineAsync(MESSAGE.READ.USER_NUMBER);
    return userNumbers;
  },
};

export default InputView;
