import fs from "fs";
import path from "path";

const CACHE = new WeakMap();

export default function getComponentFiles({ hub }) {
  if (CACHE.has(hub)) {
    return CACHE.get(hub);
  }

  const { filename } = hub;
  const ext = path.extname(filename);
  const dirname = path.dirname(filename);
  const dirFiles = fs.readdirSync(dirname).sort();
  const nameNoExt = path.basename(filename, ext);
  const isEntry = "index" === nameNoExt;
  const fileMatch = `(${nameNoExt.replace(/\./g, "\\.")}\\.${
    isEntry ? "|" : ""
  })`;
  const styleMatch = new RegExp(`^${fileMatch}style\\.\\w+$`);
  const componentMatch = new RegExp(`^${fileMatch}component\\.\\w+$`);
  const splitComponentMatch = new RegExp(
    `^${fileMatch}component-browser\\.\\w+$`
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
    } else if (!componentBrowserFile && splitComponentMatch.test(file)) {
      componentBrowserFile = `./${file}`;
    }
  }

  return {
    styleFile,
    packageFile,
    componentFile,
    componentBrowserFile
  };
}
