import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function click(name: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`.${name}`)!.click();
}

// Lazy content heading the stream settles into a value that lazy content nested
// in it shares: the parent's data still serializes ahead of the nested tag's.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click("parent"), click("nested")],
};
