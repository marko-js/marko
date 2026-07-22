import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const assertChild = (document: Document) => {
  assert.equal(
    document.querySelector('[data-child="same"]')?.textContent,
    "child same",
  );
  assert.strictEqual(document.querySelector("aside"), dynamicNode);
};
let dynamicNode: Element;
const captureDynamic = (document: Document) => {
  dynamicNode = document.querySelector("aside")!;
};

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        nativeTag: "aside",
        parentItems: [{ id: "same" }],
        childItems: [],
      },
    },
    captureDynamic,
    navigate({
      $global: {
        persisted: true,
        nativeTag: "aside",
        parentItems: [{ id: "same" }],
        childItems: [{ id: "same" }],
      },
    }),
    assertChild,
  ],
};
