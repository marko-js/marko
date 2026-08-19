import type { TestConfig } from "../../main.test";

// Scriptless: content= switches to a template the client never registered.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { title: "t1", alt: false },
    { title: "t2", alt: true },
  ],
};
