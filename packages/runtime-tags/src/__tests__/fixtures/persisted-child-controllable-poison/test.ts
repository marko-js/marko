import type { TestConfig } from "../../main.test";

// A ROOT-registered handler feeding a construct inside a loop: the bind
// path would have to cross the loop boundary (items pair by key, links by
// accessor — not expressible yet), so it poisons and the patch rejects (a
// document navigation) instead of installing a silently broken handler.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
  ],
};
