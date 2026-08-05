import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector("summary")!.click();
};

// A CONTROLLED details: patches force the server's open state; a user
// toggle reports through the handler.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: false },
    { title: "Store!", show: true },
    toggle,
  ],
};
