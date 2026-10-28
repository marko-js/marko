import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Each call passes client state in a different param of the group the
// `<if>` reads: the group is the client's at every call.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { flag: false, label: "a" },
    click,
    { flag: true, label: "b" },
    click,
    { flag: false, label: "c" },
  ],
};
