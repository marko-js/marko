import type { TestConfig } from "../../main.test";

const call = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".call")!.click();

// patch-known-dynamic-tag-fn-identity without patches.
export const config: TestConfig = {
  steps: [{ title: "a" }, call],
};
