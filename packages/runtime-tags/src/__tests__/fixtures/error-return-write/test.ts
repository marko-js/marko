import type { TestConfig } from "../../main.test";
import { throws } from "../../utils/resolve";

export const config: TestConfig = {
  skip_optimize: true,
  steps: [
    {},
    throws((document: Document) => document.querySelector("button")!.click()),
  ],
};
