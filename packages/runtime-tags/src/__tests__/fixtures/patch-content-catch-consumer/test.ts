import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// Content a child renders in its `@catch`, read or not, follows the page's
// params while later patches throw again, before and after a click, keeping
// the `@catch` the first throw showed; a patch rendering the body reloads.
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
