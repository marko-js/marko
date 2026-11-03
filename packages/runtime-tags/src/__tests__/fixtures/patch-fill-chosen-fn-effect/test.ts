import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
// A server-chosen function a fill delivers and an effect reads: a patch that
// leaves the choice keeps the page's function, so the effect doesn't re-run.
export const config: TestConfig = {
  patches: true,
  // The log is client-effect state; the client render of the same steps decides.
  skip_fresh_render: true,
  steps: [
    { upper: false },
    click,
    { upper: false },
    { upper: true },
    { upper: true },
  ],
};
