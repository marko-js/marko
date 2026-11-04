import type { TestConfig } from "../../main.test";
const sw = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.switch")!.click();
};
// A `<let>` holds one attribute tag and a handler assigns it another: each renders on
// the client and follows a patch.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, sw, { label: "c" }],
};
