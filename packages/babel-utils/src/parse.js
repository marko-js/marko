import * as babelParser from "@babel/parser";

const CODE_AS_WHITE_SPACE_KEY = Symbol();

export function parseScript(file, str, start) {
  return tryParse(file, false, str, start);
}

export function parseExpression(file, str, start) {
  return tryParse(file, true, str, start);
}

function tryParse(file, isExpression, str, start) {
  if (start) {
    let whitespace = file.metadata.marko[CODE_AS_WHITE_SPACE_KEY];

    if (whitespace === undefined) {
      file.metadata.marko[
        CODE_AS_WHITE_SPACE_KEY
      ] = whitespace = file.code.replace(/[^\s]/g, " ");
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
