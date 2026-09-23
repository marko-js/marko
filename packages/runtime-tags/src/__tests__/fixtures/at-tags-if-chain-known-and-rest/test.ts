import type { TestConfig } from "../../main.test";
function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}
export const config: TestConfig = { steps: [{}, toggle, toggle] };
