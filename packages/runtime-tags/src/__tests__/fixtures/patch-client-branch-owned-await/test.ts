import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";
function click(d: Document) {
  d.querySelector<HTMLElement>("section b")!.click();
}
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, label: "a", tag: "span", p: Promise.resolve("x") },
    navigate(() => ({
      show: true,
      label: "b",
      tag: "span",
      p: resolveAfter("y"),
    })),
    click,
    navigate(() => ({
      show: true,
      label: "c",
      tag: "i",
      p: resolveAfter("z"),
    })),
    click,
  ],
};
