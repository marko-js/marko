import nativeTagHtml from "./native-tag[html]";
import nativeTagVdom from "./native-tag[vdom]";
import {
  assertNoAttributeTags,
  assertNoParams,
  assertNoArgs
} from "@marko/babel-utils";

export default function(path) {
  const {
    hub: { file }
  } = path;
  const { markoOpts } = file;

  if (!markoOpts.ignoreUnrecognizedTags) {
    assertNoArgs(path);
    assertNoParams(path);
    assertNoAttributeTags(path);
  }

  if (markoOpts.output === "html") {
    nativeTagHtml(path);
  } else {
    nativeTagVdom(path);
  }
}
