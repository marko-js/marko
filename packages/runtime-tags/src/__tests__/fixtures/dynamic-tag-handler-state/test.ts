import type { TestConfig } from "../../main.test";

function clickSpread(document: Document) {
  document.getElementById("spread")!.click();
}

function clickInline(document: Document) {
  document.getElementById("inline")!.click();
}

function clickAliased(document: Document) {
  document.getElementById("aliased")!.click();
}

export const config: TestConfig = {
  steps: [{ tag: "button" }, clickSpread, clickInline, clickAliased],
};
