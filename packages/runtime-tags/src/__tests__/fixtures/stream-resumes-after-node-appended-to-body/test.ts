import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// What a tag manager or a browser extension does while the page streams.
function appendToBody(document: Document) {
  document.body.appendChild(document.createElement("script"));
}

function click(name: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`.${name}`)?.click();
}

// A node appended to `<body>` lands after the still open `<main>`, so what
// streams into `<main>` afterwards comes before it in the document.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  steps: [{}, flush, appendToBody, flush, wait, click("b"), click("lazy-b")],
};
