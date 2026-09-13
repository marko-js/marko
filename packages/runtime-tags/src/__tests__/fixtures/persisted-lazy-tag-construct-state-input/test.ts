import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".n")!.click();
};

// A patch reveals a load-on-render child whose input reads page state:
// the site keeps its client render, so the shell's inits resolve.
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
