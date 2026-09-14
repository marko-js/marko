import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

// A lazy page's root content body feeds a param from a server value joined
// with client state: constructed from the frame, the fresh body must
// derive the param once.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, base: 0 },
    { show: true, base: 0 },
    wait,
    click(".tick"),
    click(".bonus"),
    { show: true, base: 2 },
  ],
};
