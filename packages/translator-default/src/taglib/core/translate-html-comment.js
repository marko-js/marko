import {
  assertNoArgs,
  assertNoParams,
  assertNoAttributes
} from "@marko/babel-utils";
import write from "../../util/html-out-write";

export function enter(path) {
  const { hub } = path;
  assertNoArgs(path);
  assertNoParams(path);
  assertNoAttributes(path);

  if (hub.options.output === "html") {
    path.replaceWithMultiple([write`<!--`, ...path.node.body.body, write`-->`]);
  } else {
    path.remove();
  }
}
