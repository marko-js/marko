import type { TestConfig } from "../../main.test";

// A flush creates the caller's branch, whose `<await>` reads the caller's input:
// the client's toggle shows the value the latest patch sent.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, first: "a1", second: "a2" },
    { show: true, first: "a1", second: "a2" },
    click,
    { show: true, first: "b1", second: "b2" },
    click,
  ],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
