import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A mount effect downstream of a local derivation over parent state: the
// construct's init cascades into it, so the shell does not replay it.
export const config: TestConfig = {
  persisted: true,
  steps: [{ show: false }, click, { show: true }, click],
};
