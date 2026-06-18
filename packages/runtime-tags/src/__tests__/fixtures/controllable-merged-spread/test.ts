import type { TestConfig } from "../../main.test";
function pick(container: Element) {
  container.querySelector<HTMLButtonElement>("button")!.click();
}
export const config: TestConfig = { steps: [{}, pick] };
