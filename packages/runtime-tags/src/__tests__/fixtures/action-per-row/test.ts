import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An `<action>` declared in a `<for>` row is that row's act: its pending
// state is the row's alone.
export const config: TestConfig = {
  steps: [{ items: [{ id: "a" }, { id: "b" }] }, clickFirst, wait],
};

function clickFirst(document: Document) {
  document.querySelector("button")!.click();
}
