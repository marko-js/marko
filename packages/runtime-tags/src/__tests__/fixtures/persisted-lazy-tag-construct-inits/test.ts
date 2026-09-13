import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("main button")!.click();
};

// A patch reveals a lazy child whose shell carries init ids (a loop
// closure): they register with the module that lands after the flush.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    wait,
    click,
    { show: true, label: "c" },
  ],
};
