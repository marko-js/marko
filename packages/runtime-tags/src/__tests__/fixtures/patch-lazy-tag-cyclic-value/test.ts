import type { TestConfig } from "../../main.test";
import { release } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A held flush's cycle closes inside its thunk: the assignment runs once the
// lazy child's module is resident, with the tree it references.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  hold_load: ["tagged"],
  steps: [{ name: "a" }, { name: "b" }, release, click],
};
