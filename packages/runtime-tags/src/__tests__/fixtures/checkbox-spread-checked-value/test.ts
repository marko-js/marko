import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

function probe(document: Document) {
  const input = document.querySelector("input")!;
  document.querySelector("div")!.textContent =
    `checked:${(input as HTMLInputElement).checked}`;
}

export const config: TestConfig = {
  steps: [{}, probe, click, probe],
};
