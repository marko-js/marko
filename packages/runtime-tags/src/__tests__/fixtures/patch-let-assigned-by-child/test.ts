import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// A `<let>` a child's handler assigns follows the client.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { v: "a", promise: resolveAfter("hi") },
    { v: "a", promise: resolveAfter("ho") },
  ],
};
