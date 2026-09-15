import type { TestConfig } from "../../main.test";
import { release } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Two patches wait on the child's channel before its module lands, each
// shipping the handler bind under its guard: the click sees the newest one.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  hold_load: ["child"],
  steps: [{ title: "a" }, { title: "b" }, { title: "c" }, release, click],
};
