import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{ attrs: { id: "x", class: "y" } }, click],
};
