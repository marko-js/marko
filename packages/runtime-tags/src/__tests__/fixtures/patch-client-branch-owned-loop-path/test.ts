import type { TestConfig } from "../../main.test";
function click(d: Document) {
  d.querySelectorAll<HTMLElement>("section li > *").forEach((e) => e.click());
}
const R = (...ids: number[]) => ids.map((id) => ({ id, label: "r" + id }));
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", tag: "span", rows: R() },
    { show: true, label: "b", tag: "span", rows: R(1, 2, 3) },
    click,
    { show: true, label: "c", tag: "i", rows: R(3, 1) },
    click,
    { show: true, label: "d", tag: "i", rows: R(2, 3, 1, 4) },
    click,
  ],
};
