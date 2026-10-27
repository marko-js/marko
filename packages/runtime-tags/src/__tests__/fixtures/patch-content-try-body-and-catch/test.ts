import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A child renders the same content in its `<try>` body and its `@catch`: a
// patch rendering the body's copy still fills the param the content reads,
// so a client throw renders the catch's copy current.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click],
};
