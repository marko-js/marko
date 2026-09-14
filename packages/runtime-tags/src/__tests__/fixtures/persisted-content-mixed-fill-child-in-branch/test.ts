import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

// A child's root content body feeds a param from a server value joined
// with client state: composed into a constructing branch, the fresh body
// must derive the param once (a template root is never a page here).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, base: 0 },
    { show: true, base: 0 },
    click(".tick"),
    click(".bonus"),
    { show: true, base: 2 },
  ],
};
