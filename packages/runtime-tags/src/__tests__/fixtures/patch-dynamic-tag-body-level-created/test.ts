import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};
const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// The flush creates the owner of a kept body reading a child's returned state:
// the body renders from the created scope's values, with no level.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, on: true, note: "a" },
    { show: true, on: true, note: "b" },
    toggle,
    toggle,
    inc,
    toggle,
    toggle,
    { show: true, on: true, note: "c" },
    toggle,
    toggle,
  ],
};
