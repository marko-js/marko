import type { types as t } from "@marko/compiler";
import {
  assertNoAttributeTags,
  assertNoAttributes,
  assertNoParams,
  assertNoVar
} from "@marko/babel-utils";
import * as writer from "../util/writer";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    writer.enter(tag);
    writer.writeTo(tag)`<!--`;
    // TODO: for the DOM side this needs to normalize placeholders and text content into a string.
    // This should also error if other tags are discovered, including control flow probably.
  },
  exit(tag: t.NodePath<t.MarkoTag>) {
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    assertNoAttributeTags(tag);
    writer.exit(tag);
    writer.writeTo(tag)`-->`;
    tag.remove();
  }
};
