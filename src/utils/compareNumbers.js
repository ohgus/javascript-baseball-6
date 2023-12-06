const compareNumbers = (userInput, secretNumbers) => {
  const scoreBoard = {
    strike: 0,
    ball: 0,
  };
  const userNumbers = userInput.split("").map(Number);

  userNumbers.forEach((userDigit, index) => {
    const secretDigit = secretNumbers[index];

    if (secretNumbers.includes(userDigit)) {
      if (secretDigit === userDigit) {
        scoreBoard.strike += 1;
      } else {
        scoreBoard.ball += 1;
      }
    }
  });

  return scoreBoard;
};

export default compareNumbers;
