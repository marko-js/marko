import type { TestConfig } from "../../main.test";

// A lazy route a patch creates renders a component with a dynamic `<style>`.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
