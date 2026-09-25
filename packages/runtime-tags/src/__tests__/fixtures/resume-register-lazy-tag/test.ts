import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, wait, click, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("#inc")!.click();
}
