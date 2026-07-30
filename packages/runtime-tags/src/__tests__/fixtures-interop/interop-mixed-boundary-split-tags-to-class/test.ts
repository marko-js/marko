import type { TestConfig } from "../../main";

function bump(document: Document) {
  (document.querySelector("#bump") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, bump],
};
