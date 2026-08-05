import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch hole reading ROOT state: pairing leaves it client-owned, and a
// construct paints it from the live value via the section's registered
// INIT (the direct closure's render), not the server's stale count.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    click,
    { title: "Store!", show: true },
    { title: "Store!", show: false },
    click,
    { title: "Store!", show: true },
    click,
  ],
};
