import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 42 }, wait],
  equivalent: false,
  skip_csr: true,
};
