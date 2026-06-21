export function _unescaped(val: unknown) {
  return val ? val + "" : val === 0 ? "0" : "";
}

const unsafeXMLReg = /[<&]/g;
const replaceUnsafeXML = (c: string) => (c === "&" ? "&amp;" : "&lt;");
const escapeXMLStr = (str: string) =>
  unsafeXMLReg.test(str) ? str.replace(unsafeXMLReg, replaceUnsafeXML) : str;
export function _escape(val: unknown) {
  return val ? escapeXMLStr(val + "") : val === 0 ? "0" : "";
}

const unsafeScriptReg = /<\/script/gi;
const escapeScriptStr = (str: string) =>
  unsafeScriptReg.test(str)
    ? str.replace(unsafeScriptReg, "\\x3C/script")
    : str;
export function _escape_script(val: unknown) {
  return val ? escapeScriptStr(val + "") : val === 0 ? "0" : "";
}

const unsafeStyleReg = /<\/style/gi;
const escapeStyleStr = (str: string) =>
  unsafeStyleReg.test(str) ? str.replace(unsafeStyleReg, "\\3C/style") : str;

export function _escape_style(val: unknown) {
  return val ? escapeStyleStr(val + "") : val === 0 ? "0" : "";
}

const unsafeCommentReg = />/g;
const escapeCommentStr = (str: string) =>
  unsafeCommentReg.test(str) ? str.replace(unsafeCommentReg, "&gt;") : str;

export function _escape_comment(val: unknown) {
  return val ? escapeCommentStr(val + "") : val === 0 ? "0" : "";
}

export function _escape_textarea(val: unknown) {
  // The HTML parser strips a single leading newline from `<textarea>` content,
  // so emit an extra one to preserve a value that begins with a newline (which
  // would otherwise be lost on resume, diverging from client rendering).
  const content = _escape(val);
  return content[0] === "\n" ? "\n" + content : content;
}
