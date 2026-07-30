import type { TestConfig } from "../../main";

function clickUp(document: Document) {
  document.querySelectorAll("button")[0].click();
}

function clickDown(document: Document) {
  document.querySelectorAll("button")[1].click();
}

export const config: TestConfig = {
  steps: [{}, clickUp, clickDown],
};
