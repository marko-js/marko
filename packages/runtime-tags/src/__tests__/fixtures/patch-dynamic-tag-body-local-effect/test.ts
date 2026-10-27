import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A branch local an effect reads beside content a consumer may keep.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, on: false, note: "a" },
    { show: true, on: false, note: "b" },
    { show: true, on: true, note: "c" },
    toggle,
    toggle,
    { show: true, on: false, note: "d" },
  ],
};
