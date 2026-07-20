import type { TestConfig } from "../../main.test";

function click(document: Document, number: number) {
  const buttons: HTMLButtonElement[] = Array.from(
    document.querySelectorAll("button"),
  );
  const button = buttons.find((b) => b.textContent === "" + number)!;
  button.click();
}

export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => click(document, 2),
    (document: Document) => click(document, 3),
    (document: Document) => click(document, 5),
  ],
};
