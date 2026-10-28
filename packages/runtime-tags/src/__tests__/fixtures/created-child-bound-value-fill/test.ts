import type { TestConfig } from "../../main.test";

// patch-created-child-bound-value-fill without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false }, { show: true }, type],
};

function type(document: Document) {
  const area = document.querySelector("textarea")!;
  area.value = "hi";
  area.dispatchEvent(
    new document.defaultView!.Event("input", { bubbles: true }),
  );
}
