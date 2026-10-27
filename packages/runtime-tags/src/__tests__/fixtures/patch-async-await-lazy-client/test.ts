import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A thenable of client state re-resolves before and after a title patch;
// the patch must not Pending/Child the live await.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: () => [
    { title: "Store" },
    click,
    { title: "Store!" },
    wait,
    click,
    wait,
  ],
};
