import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(sel)!.click();
};

// A content body joins client state with fills (a root value, a loop item)
// into one child param: a constructed body registers every member's init,
// since the join fires only once all of them arrive.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, items: [{ n: 0 }], $global: { data: { base: 0 } } },
    { show: true, items: [{ n: 0 }, { n: 1 }], $global: { data: { base: 0 } } },
    click(".tick"),
    click(".bonus"),
    { show: true, items: [{ n: 1 }], $global: { data: { base: 2 } } },
  ],
};
