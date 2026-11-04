import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A `@catch` a patch creates in a child one call passes server data and one
// client state: the server data instance's created branch subscribes its owner's value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { detail: "a" },
    click,
    { error: new Error("SHOWN_x"), detail: "b" },
    click,
    { error: new Error("SHOWN_y"), detail: "" },
    { error: new Error("SHOWN_z"), detail: "c" },
  ],
};
