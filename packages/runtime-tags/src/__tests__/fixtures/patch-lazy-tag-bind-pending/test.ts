import type { TestConfig } from "../../main.test";
import { release } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Two patches wait for the child's module, each shipping its own handler
// bind: they apply in order, so the click sees the newest one.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  hold_load: ["child"],
  steps: [{ title: "a" }, { title: "b" }, { title: "c" }, release, click],
};
