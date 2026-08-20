import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }, wait, click],
};
