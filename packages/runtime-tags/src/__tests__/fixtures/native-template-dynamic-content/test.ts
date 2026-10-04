import type { TestConfig } from "../../main.test";

// Template content is out of the document, so each step copies it into view.
function read(document: Document) {
  const { content } = document.querySelector("template")!;
  document.querySelector("pre")!.textContent = [
    content.textContent,
    content.querySelector("template")!.content.textContent,
  ].join("|");
}

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, read, toggle, read, toggle, read],
};
