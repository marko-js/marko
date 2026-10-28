import type { TestConfig } from "../../main.test";

const decor = { mark: () => "!" };

// A `<const>` function a branch calls captures an input holding a function.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, text: "a", decor },
    { show: true, text: "b", decor },
  ],
};
