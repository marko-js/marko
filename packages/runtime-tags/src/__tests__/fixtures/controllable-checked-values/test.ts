import type { TestConfig } from "../../main.test";

function clickA(container: Element) {
  container.querySelectorAll(`input`)[0]!.click();
}

function clickB(container: Element) {
  container.querySelectorAll(`input`)[1]!.click();
}

function clickC(container: Element) {
  container.querySelectorAll(`input`)[2]!.click();
}

export const config: TestConfig = {
  steps: [{}, clickB, clickC, clickA],
};
