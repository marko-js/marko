import type { TestConfig } from "../../main.test";

const clickC = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#c")!.click();
};

const clickP = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#p")!.click();
};

// A child's server-owned local derives from two params the CLIENT feeds: the
// flush names both feeds' inits, so a fresh scope re-derives it from each.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true },
    clickC,
    { show: false },
    { show: true },
    clickC,
    clickP,
  ],
};
