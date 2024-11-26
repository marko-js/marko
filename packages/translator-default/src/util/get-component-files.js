import path from "path";

import { escapeRegExp } from "./escape-regexp";

const COMPONENT_FILES_KEY = "___marko_component_files___";

export default function getComponentFiles({ hub: { file } }) {
  const meta = file.metadata.marko;

  if (meta[COMPONENT_FILES_KEY]) {
    return meta[COMPONENT_FILES_KEY];
  }

  const { filename } = file.opts;
  const fs = file.markoOpts.fileSystem;
  const dirname = path.dirname(filename);
  const dirFiles = fs.readdirSync(dirname).sort();
  const base = getBase(filename);
  const isEntry = "index" === base || "template" === base;
  const fileMatch = `(${escapeRegExp(base)}\\.${isEntry ? "|" : ""})`;
  const styleMatch = new RegExp(`^${fileMatch}style\\.\\w+$`);
  const componentMatch = new RegExp(`^${fileMatch}component\\.\\w+$`);
  const splitComponentMatch = new RegExp(
    `^${fileMatch}component-browser\\.\\w+$`,
  );
  const packageMatch = new RegExp(`^${fileMatch}browser\\.\\json$`);
  let styleFile;
  let packageFile;
  let componentFile;
  let componentBrowserFile;

  for (const file of dirFiles) {
    if (!styleFile && styleMatch.test(file)) {
      styleFile = `./${file}`;
    } else if (!packageFile && packageMatch.test(file)) {
      packageFile = `./${file}`;
    } else if (!componentFile && componentMatch.test(file)) {
      componentFile = `./${file}`;
      meta.hasComponent = true;
    } else if (!componentBrowserFile && splitComponentMatch.test(file)) {
      componentBrowserFile = `./${file}`;
      meta.hasComponentBrowser = true;
    }
  }

  return (meta[COMPONENT_FILES_KEY] = {
    styleFile,
    packageFile,
    componentFile,
    componentBrowserFile,
  });
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
function getBase(filename) {
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
