import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A param+state `<const>` in a branch refreshes through its join while
// paired; reconstructing it stays fail-closed (no param construct
// delivery), so the structural flip rejects into a navigation.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { show: true, title: "Store" },
    click,
    { show: true, title: "Store?" },
    click,
    { show: false, title: "Store?" },
    { show: true, title: "Fresh" },
  ],
};
