import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A `@catch` a patch creates renders structure its closures select once: the
// patch's entry creates it, mounting its script, and the renderer's setup
// finds it in place.
export const config: TestConfig = {
  patches: true,
  steps: [
    { detail: "a" },
    { error: new Error("SHOWN_x"), detail: "b" },
    click,
    { error: new Error("SHOWN_y"), detail: "" },
    { error: new Error("SHOWN_z"), detail: "c" },
  ],
};
