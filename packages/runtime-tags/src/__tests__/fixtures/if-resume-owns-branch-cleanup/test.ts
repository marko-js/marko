import type { TestConfig } from "../../main.test";

function clickS(container: Element) {
  container.querySelector<HTMLButtonElement>("#s")!.click();
}
function clickO(container: Element) {
  container.querySelector<HTMLButtonElement>("#o")!.click();
}

export const config: TestConfig = {
  steps: [{}, clickS, clickO],
};
