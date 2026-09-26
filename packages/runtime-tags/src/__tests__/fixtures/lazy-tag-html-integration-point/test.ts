import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, wait, markNamespaces],
  equivalent: false,
};

function markNamespaces(document: Document) {
  for (const el of document.querySelectorAll(".host *")) {
    el.setAttribute("ns", el.namespaceURI!);
  }
}
