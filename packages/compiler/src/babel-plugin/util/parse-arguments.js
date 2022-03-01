import { parseExpression } from "@marko/babel-utils";

export default (file, details) => {
  if (details) {
    return parseExpression(file, `_(${details.value})`, details.pos - 1)
      .arguments;
  }
};
