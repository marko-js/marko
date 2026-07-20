import type { TestConfig } from "../../main.test";

function selectLast(document: Document) {
  const select = document.querySelector<HTMLSelectElement>("select")!;
  select.value = select.options[2].value;
  select.dispatchEvent(
    new select.ownerDocument.defaultView!.Event("change", { bubbles: true }),
  );
}

export const config: TestConfig = {
  steps: [{}, selectLast],
};
