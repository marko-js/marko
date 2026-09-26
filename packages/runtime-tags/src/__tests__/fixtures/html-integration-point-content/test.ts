import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, toggleShow, toggleEdit, toggleShow, markNamespaces],
};

function toggleEdit(document: Document) {
  document.querySelector<HTMLButtonElement>(".edit")!.click();
}

function toggleShow(document: Document) {
  document.querySelector<HTMLButtonElement>(".show")!.click();
}

function markNamespaces(document: Document) {
  for (const el of document.querySelectorAll(".host *")) {
    el.setAttribute("ns", el.namespaceURI!);
  }
}
