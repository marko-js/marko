import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A rest-consumed child (whole-`input` read) classifies through the tag's
// merged extra: state-only input still client-owns the instance.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store" }, click, { title: "Store!" }, click],
};
