import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A `<define>` passed as an attribute to a tag that may be a component: the
// component renders it again on its own state, with the values it reads.
export const config: TestConfig = {
  steps: [{ on: true, note: "a" }, toggle, toggle],
};
