import type { TestConfig } from "../../main.test";

const page = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });
const add = (document: Document) => {
  document.querySelector("button")!.click();
};

// Rows each owning a stateful `<for>` reading `$global`, one with a row: only that loop's
// owner subscribes, once, and a row the client adds later subscribes its owner.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b"), add, page("c")],
};
