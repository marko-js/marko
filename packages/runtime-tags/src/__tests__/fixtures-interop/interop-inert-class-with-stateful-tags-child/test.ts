import type { TestConfig } from "../../main.test";

function bump(document: Document) {
  (document.querySelector("#counter") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, bump],
};
