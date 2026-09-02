import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An unescaped hole patches as html: a server-owned one from the frame, a
// client-owned one through its fill; the fill never re-renders the former.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { html: "<b>a</b>" },
    { html: "<i>b</i> c" },
    click,
    { html: "<b>d</b>" },
  ],
};
