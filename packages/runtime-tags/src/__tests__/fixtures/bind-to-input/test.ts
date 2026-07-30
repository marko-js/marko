import type { TestConfig } from "../../main";

const clickControlled = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#controlled")!.click();
};

const clickUncontrolled = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#uncontrolled")!.click();
};

export const config: TestConfig = {
  steps: [
    {},
    clickControlled,
    clickUncontrolled,
    clickControlled,
    clickUncontrolled,
    clickControlled,
    clickUncontrolled,
  ],
};
