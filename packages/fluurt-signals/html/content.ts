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

function escapeIfNeeded(escape: (val: string) => string) {
  return (val: unknown) => {
    if (val == null) {
      return "";
    }

    switch (typeof val) {
      case "string":
        return escape(val);
      case "boolean":
      case "number":
        return val + "";
      default:
        return escape(val + "");
    }
  };
}
