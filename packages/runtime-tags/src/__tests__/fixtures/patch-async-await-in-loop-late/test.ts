import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A loop row's await settles after the response's first flush: the settle
// frame must re-link the row by key and replace its pending UI.
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
