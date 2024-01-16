import type { Tag } from "@marko/babel-utils";
import { currentProgramPath } from "../visitors/program";

export default {
  migrate: [
    (tag) => {
      // TODO: this is kinda just "flush here" right now
      // but it should replicate the behavior of the tag in Marko 5
      tag.replaceWithMultiple(tag.node.body.body);
      currentProgramPath.scope.crawl();
    },
  ],
} as Tag;
