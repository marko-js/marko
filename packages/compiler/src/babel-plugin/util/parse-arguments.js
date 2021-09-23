import { parseExpression } from "@marko/babel-utils";

export default (file, details) => {
  if (details) {
    let startPos = details.pos;

    if (file.code[startPos] !== "(" && file.code[startPos + 1] === "(") {
      // Fix bug in htmljs-parser with attribute argument positions
      startPos++;
    }

    return parseExpression(file, `_(${details.value})`, startPos - 1).arguments;
  }
};
