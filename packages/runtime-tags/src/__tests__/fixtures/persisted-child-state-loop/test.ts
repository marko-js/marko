import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child's loop over a client-fed list: the instance reconciles it
// client-side while the server suffix fills every item.
export const config: TestConfig = {
  persisted: true,
  steps: [{ s: "!" }, { s: "?" }, click, { s: "." }, click, { s: "," }],
};
