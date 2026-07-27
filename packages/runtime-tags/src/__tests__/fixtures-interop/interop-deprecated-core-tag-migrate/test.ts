import type { TestConfig } from "../../main.test";

function inc(document: Document) {
  (document.querySelector("#inc") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{ greeting: "hi" }, inc],
};
