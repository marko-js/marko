import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const load = (document: Document) => {
  setTimeout(() => document.body.click());
};

export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: true, label: "a" },
    load,
    { show: true, label: "b" },
    wait,
    click,
    { show: false, label: "b" },
  ],
};
