import { ok } from "assert";

import * as cache from "./cache";
import * as jsonFileReader from "./json-file-reader";
import * as loaders from "./loaders";
import * as types from "./types";

function loadTagFromFile(filePath) {
  ok(filePath, '"filePath" is required');

  var tag = cache.get(filePath);

  // Only load a tag once by caching the loaded tags using the file
  // system file path as the key
  if (!tag) {
    tag = new types.Tag(filePath);
    cache.put(filePath, tag);

    var tagProps = jsonFileReader.readFileSync(filePath);
    loaders.loadTagFromProps(tag, tagProps);
  }

  return tag;
}

export default loadTagFromFile;
