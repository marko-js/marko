import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};

// Rows join their item with an input a caller passes client state: a row takes
// its item and inits the join; with a server input the patch writes the hole.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: ["p", "q"], y: "s" },
    click,
    { items: ["r", "q"], y: "t" },
    click,
    { items: ["u", "v"], y: "w" },
  ],
};
