import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// Content a patch creates holds a `<try>` around an `<await>`: its shell
// creates the await body once, as the flush settles it or a later one does.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, id: "a", value: resolveAfter("x", 1) },
    { show: true, id: "b", value: resolveAfter("y", 2) },
    { show: true, id: "c", value: Promise.resolve("z") },
    { show: false, id: "d", value: Promise.resolve("w") },
    { show: true, id: "e", value: resolveAfter("v", 1) },
  ],
};
