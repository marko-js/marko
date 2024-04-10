export function toString(val: unknown) {
  return val || val === 0 ? val + "" : "";
}

export function escapeXML(val: unknown) {
  if (!(val || val === 0)) return "&zwj;";

  const str = val + "";
  let result = "";
  let lastPos = 0;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "<":
        result += str.slice(lastPos, i) + "&lt;";
        lastPos = i + 1;
        break;
      case "&":
        result += str.slice(lastPos, i) + "&amp;";
        lastPos = i + 1;
        break;
    }
  }

  return lastPos ? result + str.slice(lastPos) : str;
}

export const escapeScript = escapeTagEnding("script");
export const escapeStyle = escapeTagEnding("style");
function escapeTagEnding(tagName: string) {
  const openTag = `</${tagName}`;
  const escaped = `<\\/${tagName}`;
  const escapedSize = escaped.length - 1;

  return (val: unknown) => {
    if (!(val || val === 0)) return "";

    const str = val + "";
    let result = "";
    let lastPos = 0;
    let i = str.indexOf(openTag, lastPos);

    while (i !== -1) {
      result += str.slice(lastPos, i) + escaped;
      lastPos = i + escapedSize;
      i = str.indexOf(openTag, lastPos);
    }

    return lastPos ? result + str.slice(lastPos) : str;
  };
}
