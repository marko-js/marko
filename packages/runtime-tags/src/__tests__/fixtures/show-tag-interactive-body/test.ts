import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    // reveal the body
    (c: Element) => c.querySelector<HTMLButtonElement>("#toggle")!.click(),
    // interact with state inside the body
    (c: Element) => c.querySelector<HTMLButtonElement>("#inc")!.click(),
    (c: Element) => c.querySelector<HTMLButtonElement>("#inc")!.click(),
    // hide, then show again -- inner count must persist
    (c: Element) => c.querySelector<HTMLButtonElement>("#toggle")!.click(),
    (c: Element) => c.querySelector<HTMLButtonElement>("#toggle")!.click(),
  ],
};
