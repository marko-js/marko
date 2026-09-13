import type { TestConfig } from "../../main.test";

// A child const function reads an input object's method and `$global` for
// html holes the flush writes: the input never needs to serialize.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { text: "axbx", $global: { theme: "t" } },
    { text: "xa", $global: { theme: "t" } },
    { text: "xaxb", $global: { theme: "u" } },
  ],
};
