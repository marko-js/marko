import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch whose hole reads client state constructs faithfully: the
// section's registered INIT paints the hole from the live value.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store", show: "" }, click, { title: "Store", show: "yes" }],
};
