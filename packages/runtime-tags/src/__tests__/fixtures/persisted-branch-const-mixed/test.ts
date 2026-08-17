import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A param+state `<const>` in a branch refreshes through its join while
// paired and constructs from both feeds: the frame's fill lands before the
// construct, and the fill and state closure inits both arrive at the join.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, title: "Store" },
    click,
    { show: true, title: "Store?" },
    click,
    { show: false, title: "Store?" },
    { show: true, title: "Fresh" },
  ],
};
