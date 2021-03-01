import { types as t } from "@marko/compiler";

const IDENTIFIER_REG = /^[0-9A-Z_$]+$/i;

export default function toPropertyName(name: string) {
  return IDENTIFIER_REG.test(name) ? t.identifier(name) : t.stringLiteral(name);
}
