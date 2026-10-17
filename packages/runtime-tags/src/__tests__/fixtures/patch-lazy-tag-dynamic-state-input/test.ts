import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".n")!.click();
};

// A flush reveals a client-owned dynamic lazy site whose input reads page
// state: the flush waits for the module, so the client render lands with it.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    wait,
    click,
    { show: true, label: "c" },
  ],
};
