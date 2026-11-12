import type { TestConfig } from "../../main.test";

const page = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });

// A stateful `<if>` the document renders reads a `$global` key in a hole and in a script:
// its owner subscribes, so a patch changing the key re-renders the hole and runs the script.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b")],
};
