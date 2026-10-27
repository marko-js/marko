import type { TestConfig } from "../../main.test";

const value = (text: string) => ({
  text,
  toString() {
    return this.text;
  },
});
export const config: TestConfig = {
  patches: true,
  steps: [{ value: value("first") }, { value: value("second") }],
};
