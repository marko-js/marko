import type { TestConfig } from "../../main.test";

function click0(container: Element) {
  container.querySelectorAll(`input`)[0]!.click();
}

function click1(container: Element) {
  container.querySelectorAll(`input`)[1]!.click();
}

function click2(container: Element) {
  container.querySelectorAll(`input`)[2]!.click();
}

function reset(container: Element) {
  container.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, click0, click1, click2, reset],
};
