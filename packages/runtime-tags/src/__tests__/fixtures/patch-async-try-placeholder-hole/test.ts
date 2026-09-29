import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A `@placeholder` with a hole and a mount: the pending UI a patch begins
// runs its setup and mounts, as a client frame's would.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { title: "Store", promise: Promise.resolve("hi") },
    navigate(() => ({ title: "Store!", promise: resolveAfter("slow") })),
  ],
};
