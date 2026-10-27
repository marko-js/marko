import type { TestConfig } from "../../main.test";

const swap = (document: Document) => {
  document.querySelector("button")!.click();
};

export const config: TestConfig = {
  steps: [{ note: "b" }, swap],
};
