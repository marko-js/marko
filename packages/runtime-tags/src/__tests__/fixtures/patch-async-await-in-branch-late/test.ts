import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// An await directly inside an `<if>` settles after the response's first
// flush: the settle frame must re-link the live branch by its accessor.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: true, promise: Promise.resolve("one") },
    navigate(() => ({ show: true, promise: resolveAfter("uno") })),
  ],
};
