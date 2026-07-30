import type { TestConfig } from "../../main";

function click(document: Document) {
  document.getElementById("go")!.click();
}

export const config: TestConfig = {
  steps: [{}, click],
};
