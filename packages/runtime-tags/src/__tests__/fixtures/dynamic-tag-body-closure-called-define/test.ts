import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A `<define>` called in a dynamic tag's body reads an outer value; the component
// renders the body again on its own state.
export const config: TestConfig = {
  steps: [{ on: true, note: "a" }, toggle, toggle],
};
