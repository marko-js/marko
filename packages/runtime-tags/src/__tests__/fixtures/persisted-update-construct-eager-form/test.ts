import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const clickPlus = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.plus")!.click();
const submitRead = (document: Document) => {
  const form = document.querySelector<HTMLFormElement>("form.add")!;
  const data = new document.defaultView!.FormData(form);
  return [data.get("productId"), data.get("quantity")];
};

// An eager custom tag with controlled `value` inputs inside a
// patch-constructed branch: the input-derived value and the `<let>`-backed
// controllable must both seed at construction, so a submit-shaped read sees
// the right values before any client write.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      productId: 7,
      $global: {
        persisted: true,
        view: "home",
        data: { cart: [] },
        serializedGlobals: { data: true },
      },
    },
    clickCount,
    navigate({
      productId: 7,
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "item",
        data: { cart: [] },
        serializedGlobals: { data: true },
      },
    }),
    (document: Document) => {
      assert.equal(
        document.querySelector<HTMLInputElement>("input.pid")!.value,
        "7",
      );
      assert.equal(
        document.querySelector<HTMLInputElement>("input.qty")!.value,
        "1",
      );
      assert.deepEqual(submitRead(document), ["7", "1"]);
    },
    clickPlus,
    (document: Document) => {
      assert.equal(
        document.querySelector<HTMLInputElement>("input.qty")!.value,
        "2",
      );
      assert.deepEqual(submitRead(document), ["7", "2"]);
    },
  ],
};
