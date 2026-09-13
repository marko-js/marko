import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("input")!.click();
};

// A CONTROLLED checkbox: the patch's value entry forces the server's
// checked state through the controlled helper, and the handler bind keeps
// clicks reporting through the CURRENT registration.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", agree: false },
    { title: "Store!", agree: true },
    click,
  ],
};
