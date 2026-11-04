import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};
const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

export const config: TestConfig = {
  steps: [
    { show: true, on: true, note: "b" },
    toggle,
    toggle,
    inc,
    toggle,
    toggle,
  ],
};
