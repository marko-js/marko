import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";
// The value a settled body reuses was built in an earlier flush.
function click(d: Document) {
  for (const e of d.querySelectorAll<HTMLElement>("section b")) e.click();
}
function showB() {
  return { show: true, label: "b", tag: "span", p: resolveAfter("y") };
}
function showC() {
  return { show: true, label: "c", tag: "i", p: resolveAfter("z") };
}
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, label: "a", tag: "span", p: Promise.resolve("x") },
    navigate(showB),
    click,
    navigate(showC),
    click,
  ],
};
