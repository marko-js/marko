import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  patches: true,
  steps: () => [
    { promise: Promise.resolve("one") },
    click,
    navigate(() => ({ promise: resolveAfter("two") })),
  ],
};
