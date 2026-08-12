import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A settled `<await>` boundary: the document render resumes the await body
// and navigation patches values inside and around it in a single frame.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "Store", promise: Promise.resolve("hi") },
    click,
    { title: "Store!", promise: Promise.resolve("bye") },
    click,
  ],
};
