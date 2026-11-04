import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// The chunk a flush names fails to load once and the page stays (as one left
// for the back/forward cache does): the next flush loads it again and applies.
export const config: TestConfig = {
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  patches: true,
  equivalent: false,
  expect_rejection: true,
  stay_on_rejection: true,
  reject_load_once: ["child.mjs"],
  steps: [
    { show: false, label: "a" },
    { show: true, label: "a" },
    { show: true, label: "b" },
    click,
  ],
};
