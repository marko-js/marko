import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A client error renders content a child passes to its `@catch`, read or
// not, with the param a patch changed while the body still rendered; the next
// patch rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [{ label: "a" }, { label: "b" }, click, click, { label: "c" }],
};
