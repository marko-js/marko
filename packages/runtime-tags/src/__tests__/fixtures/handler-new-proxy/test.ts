import type { TestConfig } from "../../main.test";

function click(id: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
}

// The server cannot serialize a `Proxy`, so this renders in the browser.
export const config: TestConfig = {
  skip_ssr: true,
  steps: [{}, click("direct"), click("const"), click("assign")],
};
