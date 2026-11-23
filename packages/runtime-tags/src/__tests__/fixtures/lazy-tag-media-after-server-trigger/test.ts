import type { TestConfig } from "../../main.test";
import { flushMedia, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, flushMedia, wait, toggle, wait],
  equivalent: false,
};

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}
