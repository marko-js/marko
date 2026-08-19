import type { TestConfig } from "../../main.test";

// Content rendered only as a `@placeholder` (boundary content) has no dynamic
// tag entry, so its patch feature asset must not link into a scriptless page;
// the `<try>` inside the child still pins a G rejection.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { promise: Promise.resolve(), note: "x" },
    { promise: Promise.resolve(), note: "y" },
  ],
};
