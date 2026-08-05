import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The handler crosses TWO template boundaries before the constructing
// branch; the copy still resolves because each hop reads the slot its own
// template serialized, ending at the parent-bound function.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    click,
  ],
};
