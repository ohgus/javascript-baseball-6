const MESSAGE = Object.freeze({
  PRINT: {
    START: "숫자 야구 게임을 시작합니다.",
  },
  READ: {
    USER_NUMBER: "숫자를 입력해주세요 : ",
  },
  ERROR: {
    NAN: "[ERROR] 숫자를 입력해 주세요.",
    DUPLICATED: "[ERROR] 중복된 숫자는 입력할 수 없습니다.",
    OUT_OF_RANGE: "[ERROR] 1~9 사이의 숫자를 입력해 주세요.",
    INCLUDE_SPACE: "[ERROR] 공백은 포함할 수 없습니다.",
    LENGTH: "[ERROR] 숫자는 3자리 까지만 입력할 수 있습니다.",
    RESTART: "[ERROR] 숫자 1 or 2를 입력해 주세요.",
  },
  HINT: {
    STRIKE: "스트라이크",
    BALL: "볼",
    NOTHING: "낫싱",
  },
  WIN: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요." + "\n",
});

export default MESSAGE;
