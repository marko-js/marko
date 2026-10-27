import type { TestConfig } from "../../main.test";
const call = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".call")!.click();
// patch-child-live-fn-first-patch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a" },
    { title: "a" },
    { title: "b" },
    { title: "b" },
    call,
    { title: "c" },
    call,
  ],
};
