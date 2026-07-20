import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    // reveal the body
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#toggle")!.click(),
    // interact with state inside the body
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#inc")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#inc")!.click(),
    // hide, then show again -- inner count must persist
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#toggle")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#toggle")!.click(),
  ],
};
