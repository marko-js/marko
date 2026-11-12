import type { TestConfig } from "../../main.test";

const page = (label: string, late?: true) => ({
  n: 2,
  show: true,
  late,
  $global: { label, serializedGlobals: ["label"] },
});

// A created `@catch`'s child template, `<define>` body, `<if>` body and its loop's rows follow
// later `$global` changes; a read beside client state subscribes as it renders.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b", true), page("c", true)],
};
