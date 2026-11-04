import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

export const config: TestConfig = {
  steps: () => [{ on: true, note: "b", p: resolveAfter(1, 1) }, toggle, toggle],
};
