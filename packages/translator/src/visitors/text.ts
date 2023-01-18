import { types as t } from "@marko/compiler";
import * as writer from "../util/writer";
import * as walks from "../util/walks";
import { isOutputHTML } from "../util/marko-config";

export default {
  translate(text: t.NodePath<t.MarkoText>) {
    const followingSiblings = (text.container as t.Statement[]).slice(
      (text.key as number) + 1
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
    text.remove();
  },
};
