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
    { show: false, label: "a", tag: "span", flag: true },
    { show: true, label: "b", tag: "span", flag: true },
    click,
    { show: true, label: "c", tag: "em", flag: false },
    click,
  ],
};
