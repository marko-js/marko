import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  skip_optimize: true,
  error_html: true,
  error_dom: true,
  steps: [{ attrs: { checkedValue: 0, checked: false } }],
};
