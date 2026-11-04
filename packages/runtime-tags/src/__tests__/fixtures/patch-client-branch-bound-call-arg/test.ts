import type { TestConfig } from "../../main.test";
function click(d: Document) {
  for (const e of d.querySelectorAll<HTMLElement>(
    "section > :not(:first-child)",
  )) {
    e.click();
  }
}
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
    click,
  ],
};
