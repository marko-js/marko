import type { TestConfig } from "../../main.test";

// A `<let>` no client code sets names a native tag whose body reads server
// input: the patch creating the `<if>` renders that body first, on a page with
// no module.
export const config: TestConfig = {
  patches: true,
  steps: [
    { alt: false, more: false, label: "a" },
    { alt: false, more: true, label: "b" },
    { alt: false, more: true, label: "c" },
  ],
};
