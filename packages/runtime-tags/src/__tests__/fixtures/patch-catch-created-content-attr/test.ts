import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A `content=` in a `@catch` reading its error, reading none of it itself:
// the catch a patch creates renders it, and later patches throwing again keep
// it current, before and after a click; one rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    { fail: false, label: "a" },
    { fail: true, label: "b" },
    { fail: true, label: "c" },
    click,
    { fail: true, label: "e" },
    { fail: false, label: "d" },
  ],
};
