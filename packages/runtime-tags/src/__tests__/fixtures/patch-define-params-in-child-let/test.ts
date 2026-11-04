import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` with params is called in place and stored in a child's `<let>`: that
// copy resumes with no renderer, so only its walked closure (`_closure_resume`) updates it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, clear, { label: "c" }],
};
