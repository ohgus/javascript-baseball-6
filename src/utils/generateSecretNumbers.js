import { Random } from "@woowacourse/mission-utils";
import NUMBERS from "../constants/numbers.js";

const generateSecretNumbers = () => {
  const numbers = [];
  while (numbers.length < NUMBERS.LENGTH) {
    const number = Random.pickNumberInRange(
      NUMBERS.RANGE.START,
      NUMBERS.RANGE.END
    );
    if (!numbers.includes(number)) numbers.push(number);
  }

  return numbers;
};

export default generateSecretNumbers;
