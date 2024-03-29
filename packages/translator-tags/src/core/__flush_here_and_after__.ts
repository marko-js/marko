import { getTagDef, type Tag } from "@marko/babel-utils";

export default {
  transform: [
    (tag) => {
      // TODO: this is kinda just "flush here" right now
      // but it should replicate the behavior of the tag in Marko 5

      if (getTagDef(tag)?.renderer) {
        // we're in the compat layer and this is being handled by Marko 5.
        return;
      }

      tag.replaceWithMultiple(tag.node.body.body);
    },
  ],
} as Tag;
