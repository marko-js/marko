import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, click, wait],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("#load")!.click();
}
