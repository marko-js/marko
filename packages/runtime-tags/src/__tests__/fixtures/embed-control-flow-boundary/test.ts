import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("button#toggle")!.click();
}

function cleanup(document: Document) {
  document.querySelector<HTMLButtonElement>("button#cleanup")!.click();
}

export const config: TestConfig = {
  embedded: true,
  skip_csr: true,
  steps: [{}, toggle, toggle, toggle, cleanup],
};
