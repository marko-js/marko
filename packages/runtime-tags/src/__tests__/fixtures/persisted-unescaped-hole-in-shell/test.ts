import type { TestConfig } from "../../main.test";

// An unescaped hole inside a branch a patch constructs from its shell: the
// shell's placeholder text must be the node the html write replaces.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {},
    { show: 1, html: "<b>a</b>" },
    { show: 2, html: "<i>b</i> c" },
    { show: 2, html: "<u>d</u>" },
    {},
  ],
};
