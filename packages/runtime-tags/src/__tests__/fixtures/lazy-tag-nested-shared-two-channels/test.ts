import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(name: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`.${name}`)!.click();
}

// The innermost lazy child references values first serialized by both lazy
// ancestors, so its ready stream waits on both of theirs.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, click("a"), click("b"), click("c")],
};
