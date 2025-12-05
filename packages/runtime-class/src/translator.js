import * as tagsAPI from "@marko/runtime-tags/translator";

import * as classAPI from "./translator/index";

export const {
  preferAPI,
  tagDiscoveryDirs,
  transform,
  analyze,
  translate,
  taglibs,
  getRuntimeEntryFiles,
} = tagsAPI.createInteropTranslator(classAPI);
