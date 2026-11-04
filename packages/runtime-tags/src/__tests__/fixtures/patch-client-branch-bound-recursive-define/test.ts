import type { TestConfig } from "../../main.test";
function click(d: Document) {
  for (const e of d.querySelectorAll<HTMLElement>("b")) e.click();
}
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", tag: "span" },
    { show: true, label: "b", tag: "span" },
    click,
    { show: true, label: "c", tag: "i" },
    click,
  ],
};
