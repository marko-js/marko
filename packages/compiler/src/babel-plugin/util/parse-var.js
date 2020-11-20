import { parseExpression } from "@marko/babel-utils";

export default (file, details) => {
  if (details) {
    return parseExpression(file, `${details.value}=1`, details.pos + 1).left;
  }
};
