import type { TestConfig } from "../../main.test";

// A fed renderer on a scriptless page switching between tag names, `null`
// and `undefined` re-renders from its entry; a template renderer nothing
// loaded rejects (navigate).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { kind: "div" },
    { kind: "span" },
    { kind: "banner" },
    { kind: undefined },
    { kind: "span" },
    { kind: null },
    { kind: "banner" },
    { kind: "banner" },
    { kind: "em" },
  ],
};
