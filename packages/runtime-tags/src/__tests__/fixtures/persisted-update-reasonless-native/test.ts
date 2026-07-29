import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

let attribute: string | null;
let value: string;

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true } },
    (document: Document) => {
      attribute = document
        .querySelector("div.target")!
        .getAttribute("data-value");
      value = document.querySelector<HTMLInputElement>("input.target")!.value;
    },
    navigate({ $global: { persisted: true } }),
    (document: Document) => {
      assert.notEqual(
        document.querySelector("div.target")!.getAttribute("data-value"),
        attribute,
      );
      assert.notEqual(
        document.querySelector<HTMLInputElement>("input.target")!.value,
        value,
      );
    },
  ],
};
