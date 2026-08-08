import type { TestConfig } from "../../main.test";

function probe(document: Document) {
  const div = document.querySelector("div")!;
  div.textContent = JSON.stringify(div.getAttribute("data-x"));
}

export const config: TestConfig = {
  steps: [{}, probe],
};
