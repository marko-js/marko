import type { TestConfig } from "../../main";

function increment(document: Document) {
  document.querySelector<HTMLButtonElement>("#increment")?.click();
}

export const config: TestConfig = {
  steps: [{}, increment],
};
