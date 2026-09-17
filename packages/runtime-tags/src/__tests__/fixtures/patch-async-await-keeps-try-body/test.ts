import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// The mounted `<try>` is what the placeholder would replace: it stays up even
// when the pending `<await>` is new to it (revealed by a branch the same
// flush switches), so its placeholder shows only when the try itself mounts.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { title: "Store", show: false, promise: Promise.resolve("hi") },
    navigate(
      () => ({ title: "Store!", show: true, promise: resolveAfter("slow") }),
      () => {},
    ),
    { title: "Store!", show: false, promise: Promise.resolve("hi") },
  ],
};
