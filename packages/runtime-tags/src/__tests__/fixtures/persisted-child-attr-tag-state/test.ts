import type { TestConfig } from "../../main.test";

const flip = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.flip")!.click();
};
const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// A tracked client-state feed riding an attr-tag attribute gates nothing:
// the group is client-owned, exactly like the plain-attribute form.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, flip, {}, toggle, {}, toggle, {}],
};
