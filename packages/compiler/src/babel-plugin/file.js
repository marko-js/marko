import { File } from "@babel/core";
import { buildCodeFrameError } from "../util/build-code-frame";

export class MarkoFile extends File {
  addHelper() {
    throw new Error("addHelper is not supported during a Marko transform");
  }

  buildCodeFrameError(node, msg, Error) {
    return buildCodeFrameError(
      this.opts.filename,
      this.code,
      node.loc,
      msg,
      Error
    );
  }
}
