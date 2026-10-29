import type { TestConfig } from "../../main.test";

// A `<define>` body with setup, which a patch creates: the client links it to
// the `<define>`'s scope as it runs the setup, so a later patch names the body
// content's owner through that link, and pairs the live content.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    { show: true, label: "d" },
  ],
};
