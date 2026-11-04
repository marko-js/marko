import type { TestConfig } from "../../main.test";
function click(d: Document) {
  for (const e of d.querySelectorAll<HTMLElement>("section > *:not(button)")) {
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
    { label: "a", tag: "span", rows: R() },
    { label: "b", tag: "span", rows: R(1, 2, 3) },
    click,
    { label: "c", tag: "i", rows: R(3, 1) },
    click,
    { label: "d", tag: "i", rows: R(2, 3, 1, 4) },
    click,
    { label: "e", tag: "b", rows: R() },
    { label: "f", tag: "b", rows: R(5) },
    click,
  ],
};
