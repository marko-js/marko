import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A capturing change handler reached through an identifier (not inline):
// boundness is decided on the rendered value, so the construct still
// binds it to the live scope.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    click,
  ],
};
