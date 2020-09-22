import * as babelParser from "@babel/parser";

const CODE_AS_WHITESPACE = new WeakMap();

export function parseScript(file, str, start) {
  return tryParse(file, false, str, start);
}

export function parseExpression(file, str, start) {
  return tryParse(file, true, str, start);
}

function tryParse(file, isExpression, str, start) {
  if (start) {
    let whitespace = CODE_AS_WHITESPACE.get(file);

    if (whitespace === undefined) {
      CODE_AS_WHITESPACE.set(
        file,
        (whitespace = file.code.replace(/[^\s]/g, " "))
      );
    }

    str = whitespace.slice(0, start) + str;
  }

  try {
    return isExpression
      ? babelParser.parseExpression(str, file.opts)
      : babelParser.parse(str, file.opts).program;
  } catch (err) {
    let { loc, message } = err;
    if (loc) {
      throw file.buildCodeFrameError(
        { loc: { start: loc } },
        message.replace(/ *\(\d+:\d+\)$/, "")
      );
    } else {
      throw err;
    }
  }
}
