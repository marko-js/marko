import type { TestConfig } from "../../main.test";
import {
  flush,
  navigate,
  rejectAfter,
  resolveAfter,
} from "../../utils/resolve";

// The patch's values settle in separate flushes, each waiting for the body the
// document still streams; the inner body the document then catches keeps its
// `@catch`, and the patch applies.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    {
      msg: "a",
      outer: resolveAfter("o", 1),
      inner: rejectAfter(new Error("no"), 2),
    },
    navigate(settleLater),
    flush,
    flush,
  ],
};

function settleLater() {
  return {
    msg: "b",
    outer: resolveAfter("o", 1),
    inner: resolveAfter("i", 2),
  };
}
