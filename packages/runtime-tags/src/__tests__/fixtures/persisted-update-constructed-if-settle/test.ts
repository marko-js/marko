import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickButton = (document: Document) =>
  document.querySelector("button")!.click();

// A patch-constructed branch adopts its scopes, and later settle frames
// re-assert its conditional linkage: the adopted `<if>` must pair with the
// branch a prior frame already constructed instead of constructing a
// duplicate beside it, and a following matched navigation must update the
// constructed branch's displayed values.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "First", missing: true, $global: { persisted: true } },
    clickButton,
    navigate({ title: "Second", $global: { persisted: true } }),
    flush,
    clickButton,
    navigate({ title: "Deluxe", $global: { persisted: true } }),
    flush,
  ],
};
