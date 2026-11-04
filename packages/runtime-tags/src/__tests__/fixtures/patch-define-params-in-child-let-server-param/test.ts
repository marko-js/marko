import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The child renders the `<define>` it holds with a param from the page's input: a
// patch writes the param, the client renders the copy again, so its renderer registers.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", n: 2 },
    { label: "b", n: 4 },
    clear,
    { label: "c", n: 5 },
  ],
};
