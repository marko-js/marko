import { parseExpression } from "@marko/babel-utils";

export default (file, details) => {
  if (details) {
    return parseExpression(file, `(${details.value})=>{}`, details.pos).params;
  }

  return [];
};
