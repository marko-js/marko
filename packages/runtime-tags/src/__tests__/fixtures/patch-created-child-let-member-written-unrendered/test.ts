import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created child's `<let>` member only a handler reads rides in the value seed
// beside the rendered one, which would otherwise derive it empty.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", n: 1 },
    { show: true, label: "b", n: 2 },
    click,
  ],
};
