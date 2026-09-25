import type { TestConfig } from "../../main.test";

// A destructured name reads its member through the written object, as
// `live.open` does; the template keeps what it rendered.
export const config: TestConfig = {
  steps: [{}, open, read],
};

function open(document: Document) {
  document.querySelector<HTMLButtonElement>(".open")!.click();
}

function read(document: Document) {
  document.querySelector<HTMLButtonElement>(".read")!.click();
}
