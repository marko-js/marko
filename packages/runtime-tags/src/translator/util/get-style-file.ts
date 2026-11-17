import path from "path";

import { taglib, type types as t } from "@marko/compiler";

// What an `index.marko`'s style file is named, with any extension.
const indexStyleNames = ["style", "index.style"];

export default function getStyleFile(file: t.BabelFile) {
  const { filename } = file.opts;
  const base = getBase(filename);
  const isIndex = "index" === base;
  const styleMatch = new RegExp(
    `^(${escapeRegExp(base)}\\.${isIndex ? "|" : ""})style\\.\\w+$`,
  );
  const entries = taglib.addDirectoryDependency(
    path.dirname(filename),
    isIndex ? indexStyleNames : [base + ".style"],
  );
  // The first in sorted order, as they come unsorted.
  let styleFile: string | undefined;
  for (const entry of entries) {
    if ((!styleFile || entry < styleFile) && styleMatch.test(entry)) {
      styleFile = entry;
    }
  }
  return styleFile && `./${styleFile}`;
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
