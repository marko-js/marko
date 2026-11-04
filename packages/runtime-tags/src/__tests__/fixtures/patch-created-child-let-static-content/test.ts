import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created child holds static content in its `<let>`: the flush seeds it by
// id, as nothing else names it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, click],
};
