import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// An inner `<try>` that completes while its outer `<try>` is pending releases
// its effects once the outer completes, so every handler attaches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    flush,
    flush,
    flush,
    flush,
    wait,
    (document: Document) => document.querySelectorAll("button")[0].click(),
    (document: Document) => document.querySelectorAll("button")[1].click(),
    (document: Document) => document.querySelectorAll("button")[2].click(),
    (document: Document) => document.querySelectorAll("button")[3].click(),
  ],
};
