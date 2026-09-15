import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

export const config: TestConfig = {
  skip_csr: true,
  steps: [
    {
      $global: {
        get slow() {
          return resolveAfter(undefined, 1);
        },
        fast: "ok",
      },
    },
  ],
};
