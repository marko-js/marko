import type { TestConfig } from "../../main.test";
const page = (label: string) => ({
  $global: { label, serializedGlobals: { label: true } },
});
// Content a `<let>` holds reads a serialized `$global` key: every patch sends it, so the
// content the client renders follows it.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b"), page("c")],
};
