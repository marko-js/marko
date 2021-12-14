import type { types as t } from "@marko/compiler";
import { startSection } from "../util/sections";
import trackReferences from "../util/references";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    trackReferences(tag);

    const body = tag.get("body");
    if (body.get("body").length) {
      startSection(body);
    }
  },
};
