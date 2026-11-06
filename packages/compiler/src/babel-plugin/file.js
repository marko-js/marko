import { File, types as t } from "@marko/compiler/internal/babel";

import { buildCodeFrameError } from "../util/build-code-frame";

export class MarkoFile extends File {
  addHelper() {
    throw new Error("addHelper is not supported during a Marko transform");
  }

  // As Babel's: a node without a loc is framed at its first descendant with one.
  buildCodeFrameError(node, msg) {
    let loc = node?.loc;
    if (!loc && node) {
      t.traverseFast(node, (child) => {
        if (child.loc) {
          loc = child.loc;
          return t.traverseFast.stop;
        }
      });
    }

    return buildCodeFrameError(this.opts.filename, this.code, loc, msg);
  }
}
