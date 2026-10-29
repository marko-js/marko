import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A hole joins the value and a server param, a group not the promise's alone: a
// paired render writes the join (`_patch_init_entry`), so it waits for the copy.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("a") },
    wait,
    { label: "b", promise: Promise.resolve("b") },
    wait,
    { label: "c", promise: Promise.resolve("c") },
    wait,
  ],
};
