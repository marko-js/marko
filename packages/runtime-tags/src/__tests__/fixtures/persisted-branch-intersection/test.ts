import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A root fill intersecting root state, read only inside a branch: the fill
// delivers through the owner-side dispatch into the live branch pairing.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    click,
    { title: "Store!", show: true },
    click,
    { title: "Store!", show: false },
    { title: "Store!!", show: false },
    { title: "Store!!", show: true },
    click,
  ],
};
