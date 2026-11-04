import type { TestConfig } from "../../main.test";
function click(d: Document) {
  for (const e of d.querySelectorAll<HTMLElement>("section li > *")) {
    e.click();
  }
}
function R(...ids: number[]) {
  return ids.map(row);
}
function row(id: number) {
  return { id, label: "r" + id };
}
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
