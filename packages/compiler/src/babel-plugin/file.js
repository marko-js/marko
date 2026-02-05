import { File } from "@marko/compiler/internal/babel";

import { buildCodeFrameError } from "../util/build-code-frame";

export class MarkoFile extends File {
  addHelper() {
    throw new Error("addHelper is not supported during a Marko transform");
  }

  buildCodeFrameError(node, msg) {
    return buildCodeFrameError(this.opts.filename, this.code, node.loc, msg);
  }
}
