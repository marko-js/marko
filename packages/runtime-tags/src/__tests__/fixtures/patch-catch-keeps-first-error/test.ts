import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A child a `@catch` renders reads its error's message, the page's state and
// a param: patches throwing another error keep the first message, while the
// count and label update; one rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    { fail: false, msg: "a", label: "L1" },
    { fail: true, msg: "b", label: "L2" },
    click,
    { fail: true, msg: "c", label: "L3" },
    click,
    { fail: false, msg: "d", label: "L4" },
  ],
};
