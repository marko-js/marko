import { assertValidTextValue } from "../common/errors";

export function _to_text(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val || val === 0 ? val + "" : "";
}

export function _unescaped(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? val + "" : val === 0 ? "0" : "";
}

const unsafeXMLReg = /[<&]/g;
const replaceUnsafeXML = (c: string) => (c === "&" ? "&amp;" : "&lt;");
const escapeXMLStr = (str: string) =>
  unsafeXMLReg.test(str) ? str.replace(unsafeXMLReg, replaceUnsafeXML) : str;
export function _escape(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? escapeXMLStr(val + "") : val === 0 ? "0" : "";
}

const unsafeScriptReg = /<\/script/gi;
const escapeScriptStr = (str: string) =>
  unsafeScriptReg.test(str)
    ? str.replace(unsafeScriptReg, "\\x3C/script")
    : str;
export function _escape_script(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? escapeScriptStr(val + "") : val === 0 ? "0" : "";
}

const unsafeStyleReg = /<\/style/gi;
const escapeStyleStr = (str: string) =>
  unsafeStyleReg.test(str) ? str.replace(unsafeStyleReg, "\\3C/style") : str;

export function _escape_style(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? escapeStyleStr(val + "") : val === 0 ? "0" : "";
}

const unsafeCommentReg = />/g;
const escapeCommentStr = (str: string) =>
  unsafeCommentReg.test(str) ? str.replace(unsafeCommentReg, "&gt;") : str;

export function _escape_comment(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? escapeCommentStr(val + "") : val === 0 ? "0" : "";
}
