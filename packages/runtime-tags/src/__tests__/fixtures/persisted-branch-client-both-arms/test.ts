import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Both arms read the SAME server value, so one fill key carries two arm
// joins (chained when the declaration is shaken): whichever arm is live
// repaints, and the other renders fresh on the next flip.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }, click],
};
