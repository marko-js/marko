import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A stateful `<define>` body called inside a branch a flush creates: its
// state seeds from the setup entry and its handler attaches, so the click
// works and later fills refresh it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, title: "A", start: 5 },
    { show: true, title: "A", start: 5 },
    inc,
    { show: true, title: "B", start: 5 },
    inc,
  ],
};
