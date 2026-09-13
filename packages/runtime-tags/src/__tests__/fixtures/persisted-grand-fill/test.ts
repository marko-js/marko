import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Fills flow through two component levels: the card re-applies its own
// input and its tag-args re-apply the badge, fresh at reveal.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "t1", subtitle: "s1" },
    { title: "t2", subtitle: "s2" },
    toggle,
    { title: "t3", subtitle: "s3" },
  ],
};
