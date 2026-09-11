import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The persisted app shape: one root whose chain picks the page, each page a
// lazy child. A patch swaps the branch, the new page's module loads, and the
// layout's client state survives the swap.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { page: 0 },
    wait,
    click("header button"),
    { page: 1 },
    wait,
    click(".b"),
    { page: 0 },
    wait,
    click(".a"),
  ],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
