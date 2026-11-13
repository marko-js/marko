import type { TestConfig } from "../../main.test";
const page = (show: boolean, label: string) => ({
  show,
  $global: { label, serializedGlobals: { label: true } },
});
// The same where a patch creates the instance, which follows the key from then on.
export const config: TestConfig = {
  patches: true,
  steps: [page(false, "a"), page(true, "b"), page(true, "c")],
};
