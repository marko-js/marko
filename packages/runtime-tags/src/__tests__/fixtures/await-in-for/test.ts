import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ items: [{ label: "a" }, { label: "b" }] }, wait],
};
