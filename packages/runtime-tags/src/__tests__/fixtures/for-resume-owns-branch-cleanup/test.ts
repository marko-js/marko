import type { TestConfig } from "../../main.test";

function add(container: Element) {
  container.querySelector<HTMLButtonElement>("#a")!.click();
}
function toggleOuter(container: Element) {
  container.querySelector<HTMLButtonElement>("#o")!.click();
}

export const config: TestConfig = {
  steps: [{}, add, toggleOuter],
};
