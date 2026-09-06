import type { TestConfig } from "../../main.test";

const clickC = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#c")!.click();
};

const clickP = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#p")!.click();
};

// A child's server-owned local derives from a param the CLIENT feeds: the
// frame withholds the write and names the feed's init instead, so a fresh
// scope re-derives it from the live input and later feeds keep it current.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true },
    clickC,
    { show: false },
    { show: true },
    clickC,
    clickP,
  ],
};
