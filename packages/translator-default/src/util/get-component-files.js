import path from "path";
import escapeRegExp from "escape-string-regexp";

const COMPONENT_FILES_KEY = Symbol();

export default function getComponentFiles({ hub: { file } }) {
  const meta = file.metadata.marko;

  if (meta[COMPONENT_FILES_KEY]) {
    return meta[COMPONENT_FILES_KEY];
  }

  const { filename } = file.opts;
  const fs = file.markoOpts.fileSystem;
  const ext = path.extname(filename);
  const dirname = path.dirname(filename);
  const dirFiles = fs.readdirSync(dirname).sort();
  const nameNoExt = path.basename(filename, ext);
  const isEntry = "index" === nameNoExt;
  const fileMatch = `(${escapeRegExp(nameNoExt)}\\.${isEntry ? "|" : ""})`;
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
    componentBrowserFile
  });
}
