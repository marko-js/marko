import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Root state read two branch levels deep constructs from the live count
// and keeps updating after later clicks (the INIT subscribed the scope).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", outer: true, inner: false },
    click,
    { title: "Store!", outer: true, inner: true },
    click,
  ],
};
