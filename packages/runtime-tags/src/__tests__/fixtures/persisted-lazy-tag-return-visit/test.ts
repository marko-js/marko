import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The site leaves and returns with its module resident: the returning
// flush's ready batch must wait for the child to clone back in.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: true, label: "a" },
    wait,
    { show: false, label: "a" },
    { show: true, label: "b" },
    wait,
    click,
    { show: true, label: "c" },
  ],
};
