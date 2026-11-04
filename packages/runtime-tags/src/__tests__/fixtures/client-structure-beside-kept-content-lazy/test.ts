import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const toggle = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".toggle")!.click();

// patch-client-structure-beside-kept-content-lazy without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, { label: "b" }, wait, toggle, { label: "c" }, wait],
};
