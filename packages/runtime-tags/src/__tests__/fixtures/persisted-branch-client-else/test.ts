import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Both arms fill server values: dispatch reaches only the live arm, the
// hidden arm renders fresh on flip, and the root capture stays direct.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { yes: "y1", no: "n1" },
    click,
    { yes: "y2", no: "n2" },
    click,
    { yes: "y3", no: "n3" },
    click,
  ],
};
