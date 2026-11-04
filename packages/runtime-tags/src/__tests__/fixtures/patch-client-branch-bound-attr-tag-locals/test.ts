import type { TestConfig } from "../../main.test";
function click(d: Document) {
  for (const e of d.querySelectorAll<HTMLElement>("section > :not(button)"))
    e.click();
}
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", tag: "span", items: ["x", "y"] },
    { show: true, label: "b", tag: "span", items: ["x", "y"] },
    click,
    { show: true, label: "c", tag: "i", items: ["x", "y"] },
    click,
  ],
};
