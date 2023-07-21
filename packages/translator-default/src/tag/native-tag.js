import nativeTagHtml from "./native-tag[html]";
import nativeTagVdom from "./native-tag[vdom]";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
} from "@marko/babel-utils";

export default function (path, isNullable) {
  const {
    hub: { file },
  } = path;
  const { markoOpts } = file;

  if (!markoOpts.ignoreUnrecognizedTags) {
    assertNoArgs(path);
    assertNoParams(path);
    assertNoAttributeTags(path);
  }

  if (markoOpts.output === "html") {
    nativeTagHtml(path, isNullable);
  } else {
    nativeTagVdom(path, isNullable);
  }
}
