import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// A patch arriving while the boundary's initial stream is still pending
// rejects to navigation: rebuilding the try needs its body record, which
// only a frame ships, and shipping it on every frame (or every page) for
// this race costs more than the navigation it would save.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: () => [
    { msg: "a", promise: resolveAfter(2) },
    { msg: "b", promise: resolveAfter(2) },
    wait,
    flush,
  ],
};
