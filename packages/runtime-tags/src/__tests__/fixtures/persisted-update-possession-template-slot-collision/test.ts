import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const assertChild = (container: Element) => {
  assert.equal(
    container.querySelector('[data-child="same"]')?.textContent,
    "child same",
  );
  assert.strictEqual(container.querySelector("aside"), dynamicNode);
};
let dynamicNode: Element;
const captureDynamic = (container: Element) => {
  dynamicNode = container.querySelector("aside")!;
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
