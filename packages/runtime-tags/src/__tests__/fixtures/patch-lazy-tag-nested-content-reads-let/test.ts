import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Content in a nested lazy tag reads a `<let>` of its lazy parent's content.
// It subscribes by its resume id, so neither `<Outer>`'s values serialize in
// `<Inner>`'s channel, which a debug render rejects.
export const config: TestConfig = {
  patches: true,
  steps: [{ a: "a" }, wait],
};
