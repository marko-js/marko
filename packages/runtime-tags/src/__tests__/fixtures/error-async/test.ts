import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, wait],
  error_html: true,
  error_dom: true,
};
