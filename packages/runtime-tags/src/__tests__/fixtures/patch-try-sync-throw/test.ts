import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A sync throw inside a patched `<try>` body renders `@catch`, as a
// document does; the next patch rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    { message: "ok" },
    click,
    { message: "x", boom: true },
    click,
    { message: "back" },
  ],
};
