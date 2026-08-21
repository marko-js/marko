import { ok } from "assert";

import * as cache from "./cache";
import * as jsonFileReader from "./json-file-reader";
import * as loaders from "./loaders";
import * as types from "./types";

function loadFromFile(filePath, isFromPackageJson, packageName) {
  ok(filePath, '"filePath" is required');

  var taglib = cache.get(filePath);

  // Only load a taglib once by caching the loaded taglibs using the file
  // system file path as the key
  if (!taglib) {
    taglib = new types.Taglib(filePath, isFromPackageJson, packageName);
    // Cached before loading so mutually-importing taglibs terminate; dropped
    // on failure so a fixed file is re-read instead of staying broken.
    cache.put(filePath, taglib);

    try {
      var taglibProps = jsonFileReader.readFileSync(filePath);
      loaders.loadTaglibFromProps(taglib, taglibProps);
    } catch (err) {
      cache.remove(filePath);
      throw err;
    }
  } else if (packageName && !taglib.packageName) {
    // The taglib may have first been loaded by walking up from a file within the
    // package itself, in which case we did not yet know the name it is installed as.
    taglib.setPackageName(packageName);
  }

  return taglib;
}

export default loadFromFile;
