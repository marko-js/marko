import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A root `<await>` of client state whose body reads a server value, patched
// after the client changed its state.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, clickOpen, wait, wait, { label: "b" }, wait, wait],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}
