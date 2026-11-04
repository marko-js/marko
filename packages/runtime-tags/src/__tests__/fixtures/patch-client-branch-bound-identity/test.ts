import type { TestConfig } from "../../main.test";
function click(d: Document) {
  for (const e of d.querySelectorAll<HTMLElement>(
    "section b, section i, section button:not(:first-child), section span",
  )) {
    e.click();
  }
}
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", obj: { n: 1 } },
    { show: true, label: "b", obj: { n: 2 } },
    click,
    { show: true, label: "c", obj: { n: 3 } },
    click,
  ],
};
