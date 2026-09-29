import type { TestConfig } from "../../main.test";
import { after } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    after(1),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.x")!.click(),
  ],
};
