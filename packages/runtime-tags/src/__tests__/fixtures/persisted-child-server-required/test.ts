import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A structural child param fed from client-owned structure: the fill keeps
// `open` current and the instance re-selects client-side on reveal.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { o: false },
    click,
    { o: true },
    click,
    { o: false },
    click,
    { o: true },
  ],
};
