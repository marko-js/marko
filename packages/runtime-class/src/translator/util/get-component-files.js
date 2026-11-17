import path from "path";

import { taglib } from "@marko/compiler";

import { escapeRegExp } from "./escape-regexp";

const COMPONENT_FILES_KEY = "___marko_component_files___";
// A template's own files are `<name>.<kind>.<ext>`, or `<kind>.<ext>` beside an
// `index` or `template` entry.
const fileKinds = ["style", "component", "component-browser", "browser"];
const indexNames = namesFor("index", true);
const templateNames = namesFor("template", true);

export default function getComponentFiles({ hub: { file } }) {
  const meta = file.metadata.marko;

  if (meta[COMPONENT_FILES_KEY]) {
    return meta[COMPONENT_FILES_KEY];
  }

  const { filename } = file.opts;
  const base = getBase(filename);
  const isEntry = "index" === base || "template" === base;
  const entries = taglib.addDirectoryDependency(
    path.dirname(filename),
    base === "index"
      ? indexNames
      : base === "template"
        ? templateNames
        : namesFor(base, false),
  );
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

  // The first of each in sorted order, as they come unsorted.
  for (const entry of entries) {
    if ((!styleFile || entry < styleFile) && styleMatch.test(entry)) {
      styleFile = entry;
    } else if (
      (!packageFile || entry < packageFile) &&
      packageMatch.test(entry)
    ) {
      packageFile = entry;
    } else if (
      (!componentFile || entry < componentFile) &&
      componentMatch.test(entry)
    ) {
      componentFile = entry;
    } else if (
      (!componentBrowserFile || entry < componentBrowserFile) &&
      splitComponentMatch.test(entry)
    ) {
      componentBrowserFile = entry;
    }
  }

  if (componentFile) meta.hasComponent = true;
  if (componentBrowserFile) meta.hasComponentBrowser = true;
  return (meta[COMPONENT_FILES_KEY] = {
    styleFile: styleFile && `./${styleFile}`,
    packageFile: packageFile && `./${packageFile}`,
    componentFile: componentFile && `./${componentFile}`,
    componentBrowserFile: componentBrowserFile && `./${componentBrowserFile}`,
  });
}

function namesFor(base, isEntry) {
  const names = [];
  for (const kind of fileKinds) {
    names.push(base + "." + kind);
    if (isEntry) names.push(kind);
  }
  return names;
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
