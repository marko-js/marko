import type { TestConfig } from "../../main.test";
import {
  flush,
  navigate,
  rejectAfter,
  resolveAfter,
} from "../../utils/resolve";

// The patch's last flush applies before the outer body lands; the inner body
// the document then catches keeps its `@catch`, and the patch applies.
export const config: TestConfig = {
  patches: true,
  patch_while_streaming: true,
  steps: () => [
    {
      msg: "a",
      outer: resolveAfter("o", 1),
      inner: rejectAfter(new Error("no"), 2),
      last: Promise.resolve("l"),
    },
    navigate(() => ({
      msg: "b",
      outer: Promise.resolve("o"),
      inner: Promise.resolve("i"),
      last: resolveAfter("l", 1),
    })),
    flush,
    flush,
  ],
};
