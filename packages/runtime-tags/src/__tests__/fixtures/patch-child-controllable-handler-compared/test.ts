import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.add")!.click();
};

// A `<let>`'s change handler an effect also compares, which a fill delivers: a
// child a patch creates gets the same function, as plain.
export const config: TestConfig = {
  patches: true,
  // The log is client-effect state; the client render of these steps decides.
  skip_fresh_render: true,
  steps: [
    { title: "a", show: true },
    { title: "b", show: false },
    { title: "b", show: true },
    click,
  ],
};
