import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The handler IDENTITY changes while the branch is hidden; the bind entry
// re-binds the CURRENT registration against its live scope, so the
// construct installs the swapped-in handler (Last jumps by tenfold).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true, big: false },
    { title: "Store!", show: false, big: false },
    { title: "Store!", show: true, big: true },
    click,
  ],
};
