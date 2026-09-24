import type { TestConfig } from "../../main.test";

const click = (id: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
};

// Every numeric-mask group fed, as the all-groups sentinel reads, and later
// params passed constants: those serialize no markers or values.
export const config: TestConfig = {
  steps: [{}, click("inc")],
};
