import type { TestConfig } from "../../main.test";

const color = (value: string) => ({
  value,
  toString() {
    return this.value;
  },
});
export const config: TestConfig = {
  patches: true,
  steps: [{ color: color("red") }, { color: color("blue") }],
};
