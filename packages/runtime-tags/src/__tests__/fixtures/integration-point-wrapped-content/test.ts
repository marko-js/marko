import type { TestConfig } from "../../main.test";

// Text needs no namespace and a wrapping `<div>` is parsed as HTML with the
// template, so neither is rejected and the input is created as HTML.
export const config: TestConfig = {
  steps: [{}, toggleEdit, markNamespaces],
};

function toggleEdit(document: Document) {
  document.querySelector<HTMLButtonElement>(".edit")!.click();
}

function markNamespaces(document: Document) {
  for (const el of document.querySelectorAll(".host *")) {
    el.setAttribute("ns", el.namespaceURI!);
  }
}
