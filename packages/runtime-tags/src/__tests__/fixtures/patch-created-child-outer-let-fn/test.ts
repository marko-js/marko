import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created child passes its caller's function on to its own child's `<let>`:
// the flush seeds it by id, and the capture its owner writes stays current.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
