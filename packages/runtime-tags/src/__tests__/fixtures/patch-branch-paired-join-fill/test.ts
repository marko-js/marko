import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

// A resumed branch joins a local the patch fills with one a caller passes
// client state: refilling the first re-runs the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, x: "x1" },
    click("button:last-of-type"),
    { show: true, x: "x2" },
  ],
};
