import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

function increment(document: Document) {
  document.querySelector<HTMLButtonElement>("#increment")?.click();
}

export const config: TestConfig = {
  steps: [{}, increment, increment, wait],
};
