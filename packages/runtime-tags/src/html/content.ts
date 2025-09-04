export function _unescaped(val: unknown) {
  return val ? val + "" : val === 0 ? "0" : "";
}

const unsafeXMLReg = /[<&]/g;
const replaceUnsafeXML = (c: string) => (c === "&" ? "&amp;" : "&lt;");
const escapeXMLStr = (str: string) =>
  unsafeXMLReg.test(str) ? str.replace(unsafeXMLReg, replaceUnsafeXML) : str;
export function _escape(val: unknown) {
  return val ? escapeXMLStr(val + "") : val === 0 ? "0" : "&zwj;";
}

export function escapeTextAreaValue(val: unknown) {
  return val ? escapeXMLStr(val + "") : val === 0 ? "0" : "";
}

const unsafeScriptReg = /<\/script/g;
const escapeScriptStr = (str: string) =>
  unsafeScriptReg.test(str)
    ? str.replace(unsafeScriptReg, "\\x3C/script")
    : str;
export function _escape_script(val: unknown) {
  return val ? escapeScriptStr(val + "") : val === 0 ? "0" : "";
}

const unsafeStyleReg = /<\/style/g;
const escapeStyleStr = (str: string) =>
  unsafeStyleReg.test(str) ? str.replace(unsafeStyleReg, "\\3C/style") : str;

export function _escape_style(val: unknown) {
  return val ? escapeStyleStr(val + "") : val === 0 ? "0" : "";
}
