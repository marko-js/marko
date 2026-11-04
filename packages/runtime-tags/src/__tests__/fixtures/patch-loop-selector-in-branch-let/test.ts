import type { TestConfig } from "../../main.test";

const clickThird = (document: Document) => {
  document.querySelectorAll<HTMLLIElement>("li")[2].click();
};

// A selector on a filled `<let>` for a loop inside a branch: the branch's
// closure hop runs the loop's selector. The `<let>` keeps the client's value.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ selected: 1 }, { selected: 2 }, clickThird, { selected: 1 }],
};
