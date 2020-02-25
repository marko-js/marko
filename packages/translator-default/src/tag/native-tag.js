import nativeTagHtml from "./native-tag[html]";
import nativeTagVdom from "./native-tag[vdom]";
import {
  assertNoAttributeTags,
  assertNoParams,
  assertNoArgs
} from "@marko/babel-utils";

export default function(path) {
  const { hub } = path;
  const { options } = hub;

  if (!options.ignoreUnrecognizedTags) {
    assertNoArgs(path);
    assertNoParams(path);
    assertNoAttributeTags(path);
  }

  if (options.output === "html") {
    nativeTagHtml(path);
  } else {
    nativeTagVdom(path);
  }
}
