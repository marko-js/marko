import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".n")!.click();
};

// An `<await>` on a promise with no server source (a module function call)
// inside a patchable branch: the flush must still create and settle its body.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    wait,
    click,
    { show: false },
    { show: true },
    wait,
  ],
};
