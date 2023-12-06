import NUMBERS from "../constants/numbers.js";
import MESSAGE from "../constants/messages.js";

class Validator {
  static validateGameNumbers(numbers) {
    const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;

    if (numbers.replace(reg, "").length !== NUMBERS.LENGTH) {
      throw new Error(MESSAGE.ERROR.LENGTH);
    } else if (new Set(numbers).size !== NUMBERS.LENGTH) {
      throw new Error(MESSAGE.ERROR.DUPLICATED);
    } else if (numbers.includes(" ")) {
      throw new Error(MESSAGE.ERROR.INCLUDE_SPACE);
    } else if (!isFinite(numbers)) {
      throw new Error(MESSAGE.ERROR.NAN);
    } else if (numbers.includes(NUMBERS.NOT_ALLOWED)) {
      throw new Error(MESSAGE.ERROR.OUT_OF_RANGE);
    }
  }

  static validateRestart(number) {
    if (
      +number !== NUMBERS.RESTART.AGREE &&
      +number !== NUMBERS.RESTART.DISAGREE
    ) {
      throw new Error(MESSAGE.ERROR.RESTART);
    }
  }
}

export default Validator;

Validator.validateGameNumbers("123");
