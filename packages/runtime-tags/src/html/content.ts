export function toString(val: unknown) {
  return val || val === 0 ? val + "" : "";
}

export const escapeXML = escapeIfNeeded((val: string) => {
  let result = "";
  let lastPos = 0;

  for (let i = 0, len = val.length; i < len; i++) {
    let replacement: string;

    switch (val[i]) {
      case "<":
        replacement = "&lt;";
        break;
      case "&":
        replacement = "&amp;";
        break;
      default:
        continue;
    }

    result += val.slice(lastPos, i) + replacement;
    lastPos = i + 1;
  }

  if (lastPos) {
    return result + val.slice(lastPos);
  }

  return val;
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

    if (lastPos) {
      return result + val.slice(lastPos);
    }

    return val;
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
      default:
        i++;
        break;
    }
  } while (i < len);

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

  for (let i = startPos, len = val.length; i < len; i++) {
    if (val[i] === quote) {
      result += val.slice(lastPos, i) + escaped;
      lastPos = i + 1;
    }
  }

  return result + (lastPos ? val.slice(lastPos) : val) + quote;
}
