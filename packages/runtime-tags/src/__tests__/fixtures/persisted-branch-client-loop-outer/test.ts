import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-owned chain inside a server loop body: live items patch via
// fills, but the loop shell drops, so growing the list navigates.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: ["x"], note: "n1" },
    click,
    { items: ["x"], note: "n2" },
    { items: ["x", "y"], note: "n2" },
  ],
};
