import type { TestConfig } from "../../main.test";

const clickN = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#n")!.click();
};

// A parent fill joined only with LOCAL state constructs: the seed and the
// fill's join-arrival init both land in the fresh scope's first render.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, title: "Store" },
    clickN,
    { show: false, title: "Store?" },
    { show: true, title: "Fresh" },
  ],
};
