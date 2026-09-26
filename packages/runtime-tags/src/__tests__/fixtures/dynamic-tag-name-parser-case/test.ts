import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { void: "BR", html: "Button", svg: "ClipPath", camel: "linearGradient" },
    markElements,
  ],
  equivalent: false,
};

function markElements(document: Document) {
  for (const el of document.body.querySelectorAll("*")) {
    el.setAttribute("data-name", el.localName);
  }
  document.body.setAttribute(
    "data-button",
    document.querySelector("Button")!.constructor.name,
  );
}
