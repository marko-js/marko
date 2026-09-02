import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A native `content=` selected by client state renders client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click],
};
