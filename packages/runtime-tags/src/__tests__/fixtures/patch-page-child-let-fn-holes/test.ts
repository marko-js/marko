import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function a `<let>` holds, called with server input in each kind of value
// hole: the server writes each hole until client code sets the `<let>`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
