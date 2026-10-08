import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A never-assigned root let over a param is refreshable like a `<const>`:
// the patch writes it, so a later handler read sees the current value.
export const config: TestConfig = {
  patches: true,
  csr_divergence:
    "A patch refreshes a never-assigned `<let>` from new input, which a client render keeps at its initial value.",
  steps: [{ foo: "ab" }, click, { foo: "abcd" }, click],
};
