const TAB = 9;
const LF = 10;
const CR = 13;
const STAR = 42;
const SLASH = 47;
const BACKSLASH = 92;
const SPACES = " ".repeat(128);

// Blanks out `//` and `/* */` comments outside strings, keeping tabs and line
// breaks so a JSON.parse error still points at the original line and column.
export function stripComments(json: string) {
  let slash = json.indexOf("/");
  if (slash === -1) return json;

  let quote = nextQuote(json, 0);
  let result = "";
  let copied = 0;

  while (slash !== -1) {
    // A string that opens before the slash may contain it.
    while (quote !== -1 && quote < slash) {
      const close = nextQuote(json, quote + 1);
      if (close === -1) {
        slash = -1;
        break;
      }
      if (close > slash) slash = json.indexOf("/", close + 1);
      quote = nextQuote(json, close + 1);
    }
    if (slash === -1) break;

    let end: number;
    const next = json.charCodeAt(slash + 1);
    if (next === SLASH) {
      end = json.indexOf("\n", slash + 2);
      if (end === -1) end = json.length;
    } else if (next === STAR) {
      // An unclosed comment is left for JSON.parse to report.
      end = json.indexOf("*/", slash + 2);
      if (end === -1) break;
      end += 2;
    } else {
      slash = json.indexOf("/", slash + 1);
      continue;
    }

    result += json.slice(copied, slash) + blank(json, slash, end);
    copied = end;
    slash = json.indexOf("/", end);
    if (quote !== -1 && quote < end) quote = nextQuote(json, end);
  }

  return copied ? result + json.slice(copied) : json;
}

// A quote after an odd run of backslashes neither opens nor closes a string.
function nextQuote(json: string, from: number) {
  let quote = json.indexOf('"', from);
  while (quote !== -1 && isEscaped(json, quote)) {
    quote = json.indexOf('"', quote + 1);
  }
  return quote;
}

function isEscaped(json: string, quote: number) {
  let i = quote;
  while (json.charCodeAt(i - 1) === BACKSLASH) i--;
  return (quote - i) % 2 === 1;
}

function blank(json: string, start: number, end: number) {
  let out = "";
  let from = start;
  for (let i = start; i < end; i++) {
    const code = json.charCodeAt(i);
    if (code === TAB || code === LF || code === CR) {
      out += spaces(i - from) + json[i];
      from = i + 1;
    }
  }
  return out + spaces(end - from);
}

function spaces(count: number) {
  return count <= SPACES.length ? SPACES.slice(0, count) : " ".repeat(count);
}
