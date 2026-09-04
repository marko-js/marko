import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A change handler read from an ANCESTOR section: the bind entry ships
// owner hops, so a constructed branch's handler receives the scope it was
// written against and assignments reach the root state.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    click,
  ],
};
