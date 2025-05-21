function timeWord(timeStr) {
  if (timeStr === "00:00") return "midnight";
  if (timeStr === "12:00") return "noon";

  const [hoursStr, minutesStr] = timeStr.split(":");
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  const period = hours >= 12 ? "pm" : "am";

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  const hourWords = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];

  const hourWord = hourWords[hours];

  let minuteWord = "";

  if (minutes === 0) {
    minuteWord = "o'clock";
  } else if (minutes < 10) {
    minuteWord = `oh ${getOnesWord(minutes)}`;
  } else if (minutes < 20) {
    const teensWords = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    minuteWord = teensWords[minutes - 10];
  } else {
    const tensWords = ["", "", "twenty", "thirty", "forty", "fifty"];

    const tensDigit = Math.floor(minutes / 10);
    const onesDigit = minutes % 10;

    if (onesDigit === 0) {
      minuteWord = tensWords[tensDigit];
    } else {
      minuteWord = `${tensWords[tensDigit]} ${getOnesWord(onesDigit)}`;
    }
  }

  return `${hourWord} ${minuteWord} ${period}`;
}

function getOnesWord(num) {
  const onesWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return onesWords[num];
}

module.exports = timeWord;
