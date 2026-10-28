import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// The server swaps the content a `<try>` body renders: its tag takes the entry,
// and a client throw renders the current content in the `@catch`; the next patch
// rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    { alt: false, label: "a" },
    { alt: true, label: "b" },
    click,
    { alt: false, label: "c" },
    click,
    { alt: true, label: "d" },
  ],
};
