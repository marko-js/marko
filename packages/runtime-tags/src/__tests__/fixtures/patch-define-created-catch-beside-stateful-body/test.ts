import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created `@catch` calls a stateful body with a constant: it creates from its
// registered renderer, whose setup does the call's work; a patch rendering the
// body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    { fail: false, label: "a" },
    { fail: true, label: "b" },
    click,
    { fail: true, label: "c" },
    { fail: true, label: "e" },
    { fail: false, label: "d" },
  ],
};
