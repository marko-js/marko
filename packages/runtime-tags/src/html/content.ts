import { assertValidTextValue } from "../common/errors";
import { escapeStyleValue } from "../common/helpers";

export function _to_text(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  // Numeric 0 is special-cased so it still renders; bigint `0n` deliberately is
  // not, here or in the escape helpers below (not worth the size on these hot paths).
  return val || val === 0 ? val + "" : "";
}

export function _unescaped(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? val + "" : val === 0 ? "0" : "";
}

const enum Char {
  Amp = 38, // &
  Lt = 60, // <
  Gt = 62, // >
}

// Locates the first `<`/`&` with SIMD-accelerated `indexOf` (much faster than a
// regex scan on the common no-escape path) then rewrites in a single pass,
// slicing past the untouched prefix instead of re-scanning it.
function escapeXMLStr(str: string) {
  let start = str.indexOf("&");
  if (start === -1) {
    start = str.indexOf("<");
    if (start === -1) return str;
  } else {
    const lt = str.indexOf("<");
    if (lt !== -1 && lt < start) start = lt;
  }

  let result = str.slice(0, start);
  let last = start;
  for (let i = start; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code === Char.Amp) {
      result += str.slice(last, i) + "&amp;";
      last = i + 1;
    } else if (code === Char.Lt) {
      result += str.slice(last, i) + "&lt;";
      last = i + 1;
    }
  }

  return result + str.slice(last);
}
export function _escape(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? escapeXMLStr(val + "") : val === 0 ? "0" : "";
}

// Neutralizes the sequences that shift the script-data tokenizer state:
// `</script` (close tag) plus `<!--` and `<script`, whose combination puts
// the parser in the double-escaped state where a real `</script>` no longer
// closes the element and the rest of the page is swallowed into it.
const unsafeScriptReg = /<(\/?script|!--)/gi;
const escapeScriptStr = (str: string) =>
  str.indexOf("<") !== -1 && unsafeScriptReg.test(str)
    ? str.replace(unsafeScriptReg, "\\x3C$1")
    : str;
export function _escape_script(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? escapeScriptStr(val + "") : val === 0 ? "0" : "";
}

const unsafeStyleReg = /<\/style/gi;
const escapeStyleStr = (str: string) =>
  str.indexOf("<") !== -1 && unsafeStyleReg.test(str)
    ? str.replace(unsafeStyleReg, "\\3C/style")
    : str;

export function _escape_style(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? escapeStyleStr(val + "") : val === 0 ? "0" : "";
}

export function _escape_style_value(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val || val === 0 ? escapeStyleValue(val + "") : "";
}

function escapeCommentStr(str: string) {
  const start = str.indexOf(">");
  if (start === -1) return str;

  let result = str.slice(0, start);
  let last = start;
  for (let i = start; i < str.length; i++) {
    if (str.charCodeAt(i) === Char.Gt) {
      result += str.slice(last, i) + "&gt;";
      last = i + 1;
    }
  }

  return result + str.slice(last);
}

export function _escape_comment(val: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(val);
  }
  return val ? escapeCommentStr(val + "") : val === 0 ? "0" : "";
}
