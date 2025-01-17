import type { types as t } from "@marko/compiler";
import path from "path";

export default function getStyleFile(file: t.BabelFile) {
  const { filename } = file.opts;
  const fs = file.markoOpts.fileSystem;
  const base = getBase(filename);
  const styleMatch = new RegExp(
    `^(${escapeRegExp(base)}\\.${"index" === base ? "|" : ""})style\\.\\w+$`,
  );

  for (const file of fs.readdirSync(path.dirname(filename)).sort()) {
    if (styleMatch.test(file)) {
      return `./${file}`;
    }
  }
}

/**
 * Given a filename, gets the base name, strips off the file extension
 * and removes any arc flags (https://github.com/eBay/arc).
 *
 * @example
 * getBase("/dir/foo.marko") // => "foo"
 * getBase("/dir/foo.bar.marko") // => "foo.bar"
 * getBase("/dir/foo[bar].marko") // => "foo"
 * getBase("/dir/foo[bar].baz.marko") // => "foo.baz"
 */
function getBase(filename: string) {
  const start = filename.lastIndexOf(path.sep) + 1;
  const leftDot = filename.indexOf(".", start);

  if (leftDot === -1) {
    return filename.slice(start);
  }

  const rightDot = filename.lastIndexOf(".");
  const closeBracket = leftDot - 1;
  if (filename[closeBracket] === "]") {
    const openBracket = filename.lastIndexOf("[", closeBracket);
    if (openBracket > start) {
      // If we match a "]" before the extension and find a "[" before that,
      // then we have an arc flag. Strip it off.
      return (
        filename.slice(start, openBracket) + filename.slice(leftDot, rightDot)
      );
    }
  }

  return filename.slice(start, rightDot);
}

const regexpCharsReg = /[\\^$.*+?()[\]{}|]/g;
function escapeRegExp(str: string) {
  return str.replace(regexpCharsReg, "\\$&");
}
