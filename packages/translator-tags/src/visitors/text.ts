import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

export default {
  translate: {
    enter(text: t.NodePath<t.MarkoText>) {
      const followingSiblings = (text.container as t.Statement[]).slice(
        (text.key as number) + 1,
      );
      let needsSeparator = false;
      if (isOutputHTML()) {
        for (const sibling of followingSiblings) {
          if (t.isMarkoPlaceholder(sibling)) {
            needsSeparator = true;
            break;
          } else if (t.isMarkoTag(sibling) || t.isMarkoText(sibling)) {
            break;
          }
        }
      }
      writer.writeTo(text)`${text.node.value}${needsSeparator ? "<!>" : ""}`;
      walks.enterShallow(text);
    },
    exit(text: t.NodePath<t.MarkoText>) {
      text.remove();
    },
  },
};
