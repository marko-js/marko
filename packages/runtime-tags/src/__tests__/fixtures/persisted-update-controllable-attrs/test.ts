import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickAdd = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.add")!.click();

// The product-form shape: controllable attrs (`value` on inputs and
// selects) whose values are request-derived -- rendered through the
// controllable helpers rather than plain attr writes, so their update
// capture/merge goes through the helper's `_default` variant. On a
// persisted navigation the hidden input's value attribute (which IS its
// live value -- no user-owned state) must follow the patch, the text
// input's default updates while its live value stays user-owned, and the
// select re-defaults; the bound (`:=`) qty input is client state and must
// never ride a patch.
export const config: TestConfig = {
  persisted: true,
  // `getItem` is server-only by design, so a plain client render of this
  // template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, item: [2] } },
    clickAdd,
    navigate({ $global: { persisted: true, item: [3] } }),
    clickAdd,
  ],
};
