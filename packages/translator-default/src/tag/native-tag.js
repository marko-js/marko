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
  const { _markoOptions } = file;

  if (!_markoOptions.ignoreUnrecognizedTags) {
    assertNoArgs(path);
    assertNoParams(path);
    assertNoAttributeTags(path);
  }

  if (_markoOptions.output === "html") {
    nativeTagHtml(path);
  } else {
    nativeTagVdom(path);
  }
}
