import type { TestConfig } from "../../main.test";

const input = (v: number) => ({
  label: "one",
  ...Object.fromEntries(
    Array.from({ length: 14 }, (_, i) => ["v" + (i + 1), v]),
  ),
  $global: { brand: "Marko", serializedGlobals: ["brand"] },
});

// `$global` script run marks never collide with patched accessors.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [input(1), input(1), input(2)],
};
