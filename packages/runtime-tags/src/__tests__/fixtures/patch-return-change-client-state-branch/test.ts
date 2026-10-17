import type { TestConfig } from "../../main.test";

const pickB = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".mode")!.click();
};
const assign = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".set")!.click();
};

// In a branch a flush may create, the state-picked `<return>` handler rides the
// setup envelope alone: the paired child keeps the handler the client picked.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true }, pickB, { show: true }, assign],
};
