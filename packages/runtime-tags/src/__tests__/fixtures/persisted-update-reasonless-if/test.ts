import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

let wasPrimary: boolean;

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true } },
    (document: Document) => {
      wasPrimary = !!document.querySelector("p.primary");
      process.env.MARKO_REASONLESS_IF_COUNT = "1";
    },
    navigate({ $global: { persisted: true } }),
    (document: Document) => {
      assert.notEqual(!!document.querySelector("p.primary"), wasPrimary);
      assert.equal(!!document.querySelector("p.fallback"), wasPrimary);
      delete process.env.MARKO_REASONLESS_IF_COUNT;
    },
  ],
};
