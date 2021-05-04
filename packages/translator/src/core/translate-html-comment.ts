import { types as t } from "@marko/compiler";
import {
  assertNoAttributeTags,
  assertNoAttributes,
  assertNoParams,
  assertNoVar
} from "@marko/babel-utils";
import { writeHTML } from "../util/html-write";
import { writeTemplate } from "../util/dom-writer";
import { isOutputHTML } from "../util/marko-config";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    if (isOutputHTML(tag)) {
      writeHTML(tag)`<!--`;
    } else writeTemplate(tag, `<!--`);
  },
  exit(tag: t.NodePath<t.MarkoTag>) {
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    assertNoAttributeTags(tag);

    if (isOutputHTML(tag)) {
      writeHTML(tag)`-->`;
    } else writeTemplate(tag, `-->`);

    tag.remove();
  }
};
