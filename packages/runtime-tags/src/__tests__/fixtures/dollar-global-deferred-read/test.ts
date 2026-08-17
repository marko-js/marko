import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  skip_csr: true,
  steps: [
    {
      $global: {
        slow: new Promise((resolve) => setTimeout(resolve, 10)),
        fast: "ok",
      },
    },
  ],
};
