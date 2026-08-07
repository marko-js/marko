import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-owned chain inside a server-owned branch: patches still reach
// it, but the outer shell drops, so revealing it rejects to navigation.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { show: true, title: "a" },
    click,
    { show: true, title: "b" },
    click,
    { show: true, title: "c" },
    { show: false, title: "d" },
    { show: true, title: "e" },
  ],
};
