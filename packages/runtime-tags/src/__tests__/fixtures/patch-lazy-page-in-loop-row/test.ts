import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A created loop row holding a fed lazy page: the row is not a branch a
// channel can adopt, so its entry rides the loop and the page's data hangs
// its guard on the row (the row clones before the module lands).
export const config: TestConfig = {
  patches: true,
  steps: [
    { rows: [1] },
    wait,
    click("button"),
    { rows: [1, 2] },
    wait,
    click(".row"),
    { rows: [2, 3] },
    wait,
  ],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
