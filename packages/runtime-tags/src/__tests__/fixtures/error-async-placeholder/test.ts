import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      $global: {
        __flush__(_$global: unknown, html: string) {
          return html;
        },
      },
    },
  ],
  skip_csr: true,
  error_html: true,
};
