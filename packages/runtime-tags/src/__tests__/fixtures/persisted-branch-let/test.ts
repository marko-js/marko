import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Branch-local state: hydrated branches keep client state through pairing
// patches, a construct seeds server-rendered state onto the fresh scope,
// and a re-construct starts fresh (hide destroyed the old branch).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    click,
    { title: "Store!", show: true },
    click,
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    click,
  ],
};
