import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A `<const>` function a branch calls captures the page's input, which no caller
// passes client state: the patch renders every read, so it writes no capture.
export const config: TestConfig = {
  patches: true,
  steps: [{ a: "A", x: true }, inc, { a: "B", x: false }, { a: "C", x: true }],
};
