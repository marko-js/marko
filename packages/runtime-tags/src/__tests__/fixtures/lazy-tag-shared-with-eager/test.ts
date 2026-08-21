import type { TestConfig } from "../../main.test";

function clickEagerShared(document: Document) {
  (document.querySelector("section .shared") as HTMLButtonElement)?.click();
}

export const config: TestConfig = {
  steps: [{}, clickEagerShared],
  equivalent: false,
};
