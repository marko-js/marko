import type { TestConfig } from "../../main.test";
// A script reading an object the template builds re-runs once what it is built
// from changes, not on every patch (the object goes as a plain write).
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
