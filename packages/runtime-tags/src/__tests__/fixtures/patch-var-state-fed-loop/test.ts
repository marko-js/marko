import assert from "assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A scriptless child's tag var whose caller feeds it client state (a loop
// over a `<let>`) wires on resume, so the var follows the state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { suffix: "a" },
    click,
    (document: Document) => {
      assert.strictEqual(
        document.querySelector("span")!.textContent +
          "|" +
          document.querySelector("p")!.textContent,
        "ya|[ya]",
      );
    },
  ],
};
