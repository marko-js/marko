import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, click(1), click(1)],
};

function click(index: number) {
  return (document: Document) =>
    document.querySelectorAll("button")[index].click();
}
