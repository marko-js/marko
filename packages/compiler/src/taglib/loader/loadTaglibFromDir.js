import { ok } from "assert";
import nodePath from "path";

import * as cache from "./cache";
import DependencyChain from "./DependencyChain";
import scanTagsDir from "./scanTagsDir";
import * as types from "./types";

function loadFromDir(dir, tagDiscoveryDir) {
  ok(dir, '"dir" is required');

  var componentsPath = nodePath.join(dir, tagDiscoveryDir);
  var taglib = cache.get(componentsPath);

  // Only load a taglib once by caching the loaded taglibs using the file
  // system file path as the key
  if (!taglib) {
    taglib = new types.Taglib(componentsPath);
    cache.put(componentsPath, taglib);
    scanTagsDir(
      componentsPath,
      dir,
      tagDiscoveryDir,
      taglib,
      new DependencyChain([componentsPath]),
    );
  }

  return taglib;
}

export default loadFromDir;
