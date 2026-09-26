import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, recordNamespaces, toggle, toggle, recordNamespaces],
};

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A namespaced attribute serializes like a plain one, so expose its namespace.
function recordNamespaces(document: Document) {
  for (const el of document.querySelectorAll("use, div")) {
    el.setAttribute(
      "data-ns",
      Array.from(el.attributes)
        .filter((attr) => attr.name.includes(":"))
        .map((attr) => String(attr.namespaceURI))
        .join(" "),
    );
  }
}
