import type { TestConfig } from "../../main.test";

// A read of a `$global` member beside one of its parts, below the template's root:
// the part runs with the member, so the section closes over the member alone.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, $global: { meta: { title: "a", flag: 1 }, serializedGlobals: ["meta"] } },
    { show: true, $global: { meta: { title: "b", flag: 2 }, serializedGlobals: ["meta"] } },
  ],
};
