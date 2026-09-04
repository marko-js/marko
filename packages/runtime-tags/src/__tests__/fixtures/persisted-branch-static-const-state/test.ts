import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A source-less local `<const>` (and an alias of it) joined with state is
// seeded by its partial: a construct paints from the server value.
export const config: TestConfig = {
  persisted: true,
  steps: [{ show: false }, click, { show: true }, click],
};
