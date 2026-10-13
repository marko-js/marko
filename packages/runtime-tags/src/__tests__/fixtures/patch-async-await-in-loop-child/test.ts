import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A loop item's await lives in a child template and settles after the
// response's first flush: the settle frame re-links the item by key.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { items: [{ id: 1, promise: Promise.resolve("one") }] },
    navigate(() => ({
      items: [
        { id: 1, promise: resolveAfter("uno") },
        { id: 2, promise: resolveAfter("dos") },
      ],
    })),
  ],
};
