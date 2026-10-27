import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};

// One child, two callers: where one passes the join client state the scope
// inits it; where both inputs are the server's the patch writes it alone.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "p" },
    click,
    { a: "y", b: "q" },
    click,
    { a: "z", b: "r" },
  ],
};
