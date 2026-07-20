import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{ $global: { x: 1, serializedGlobals: ["x"] } }, click, click, click],
};
