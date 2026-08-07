import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-owned chain nested inside a server-owned branch: patch renders
// still render the outer body but skip the inner chain, the interior
// server value delivers through the lazy closure's owner-side dispatch,
// and flipping the server selection (client-owned content drops the
// outer shell) rejects to navigation rather than a wrong construct.
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
