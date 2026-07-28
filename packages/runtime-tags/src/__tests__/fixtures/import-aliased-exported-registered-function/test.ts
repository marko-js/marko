import type { TestConfig } from "../../main.test";

function clickShout(document: Document) {
  document.querySelectorAll("button")[0].click();
}

function clickWhisper(document: Document) {
  document.querySelectorAll("button")[1].click();
}

export const config: TestConfig = {
  steps: [{}, clickShout, clickWhisper],
};
