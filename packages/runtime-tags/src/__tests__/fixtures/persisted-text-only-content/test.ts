import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Text-only bodies (raw text elements, `<title>`, comments) patch their
// content; one mixing client state recomputes through a fill.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", color: "red" },
    { title: "b", color: "blue" },
    click,
    { title: "c", color: "green" },
  ],
};
