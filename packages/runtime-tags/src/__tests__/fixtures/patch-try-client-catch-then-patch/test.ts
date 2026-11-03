import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client error shows the `@catch`; the next patch renders the body, so it
// rejects and the browser loads the URL as a document.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [{ message: "a" }, click, { message: "b" }],
};
