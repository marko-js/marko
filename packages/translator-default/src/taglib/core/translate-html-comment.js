import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
} from "@marko/babel-utils";

import write from "../../util/html-out-write";

export function enter(path) {
  assertNoArgs(path);
  assertNoParams(path);
  assertNoAttributes(path);

  if (path.hub.file.markoOpts.output === "html") {
    path.replaceWithMultiple([write`<!--`, ...path.node.body.body, write`-->`]);
  } else {
    path.remove();
  }
}
