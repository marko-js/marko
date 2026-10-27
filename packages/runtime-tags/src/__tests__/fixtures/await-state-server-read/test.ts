import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A root `<await>` of client state whose body reads a server value the patch
// changes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }, clickOpen, wait, wait],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}
