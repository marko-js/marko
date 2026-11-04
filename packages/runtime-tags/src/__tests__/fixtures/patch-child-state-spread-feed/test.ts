import type { TestConfig } from "../../main.test";

const flip = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.flip")!.click();
};
const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// State feeds riding spreads (attr-tag level, a `<const>` of state, and
// tag level) resolve through the merged extra: all client-fed, admitted.
export const config: TestConfig = {
  patches: true,
  steps: [{}, flip, {}, toggle, {}, toggle, {}],
};
