import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, toggleWithoutIdleCallback, wait],
};

function toggleWithoutIdleCallback(document: Document) {
  Reflect.deleteProperty(document.defaultView!, "requestIdleCallback");
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}
