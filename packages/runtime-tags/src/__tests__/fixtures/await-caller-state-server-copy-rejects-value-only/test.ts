import type { TestConfig } from "../../main.test";
import { rejectAfter, resolveAfter, wait } from "../../utils/resolve";

// The client's promise settled; the server's copy of it rejects, and the body
// has no server hole.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { label: "a", promise: resolveAfter("a") },
    wait,
    { label: "b", promise: rejectAfter(new Error("server copy")) },
    wait,
  ],
};
