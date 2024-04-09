export function toString(val: unknown) {
  return val || val === 0 ? val + "" : "";
}

export const escapeXML = escapeIfNeeded((val: string) => {
  let result = "";
  let lastPos = 0;

  for (let i = 0; i < val.length; i++) {
    switch (val[i]) {
      case "<":
        result += val.slice(lastPos, i) + "&lt;";
        lastPos = i + 1;
        break;
      case "&":
        result += val.slice(lastPos, i) + "&amp;";
        lastPos = i + 1;
        break;
    }
  }

  return lastPos ? result + val.slice(lastPos) : val;
});

export const escapeScript = escapeIfNeeded(escapeTagEnding("script"));
export const escapeStyle = escapeIfNeeded(escapeTagEnding("style"));
function escapeTagEnding(tagName: string) {
  const openTag = `</${tagName}`;
  const escaped = `<\\/${tagName}`;

  return (val: string) => {
    let result = "";
    let lastPos = 0;
    let i = val.indexOf(openTag, lastPos);

    while (i !== -1) {
      result += val.slice(lastPos, i) + escaped;
      lastPos = i + 1;
      i = val.indexOf(openTag, lastPos);
    }

    return lastPos ? result + val.slice(lastPos) : val;
  };
}

export function escapeAttrValue(val: string) {
  const len = val.length;
  let i = 0;
  do {
    switch (val[i]) {
      case '"':
        return quoteValue(val, i + 1, "'", "&#39;");
      case "'":
      case ">":
      case " ":
      case "\t":
      case "\n":
      case "\r":
      case "\f":
        return quoteValue(val, i + 1, '"', "&#34;");
    }
  } while (++i < len);

  return val;
}

function escapeIfNeeded(escape: (val: string) => string) {
  return (val: unknown) => {
    if (!val && val !== 0) {
      return "&zwj;";
    }

    switch (typeof val) {
      case "string":
        return escape(val);
      case "boolean":
        return "true";
      case "number":
        return val + "";
      default:
        return escape(val + "");
    }
  };
}

function quoteValue(
  val: string,
  startPos: number,
  quote: string,
  escaped: string,
) {
  let result = quote;
  let lastPos = 0;

  for (let i = startPos; i < val.length; i++) {
    if (val[i] === quote) {
      result += val.slice(lastPos, i) + escaped;
      lastPos = i + 1;
    }
  }

  return result + (lastPos ? val.slice(lastPos) : val) + quote;
}
