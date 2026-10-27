import type { TestConfig } from "../../main.test";

const color = (value: string) => ({
  value,
  toString() {
    return this.value;
  },
});
export const config: TestConfig = {
  patches: true,
  // The patched rule names the build-specific custom property.
  skip_parity: true,
  steps: [{ color: color("red") }, { color: color("blue") }],
};
