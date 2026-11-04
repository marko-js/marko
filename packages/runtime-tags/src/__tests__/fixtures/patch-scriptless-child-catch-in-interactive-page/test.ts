import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("#inc")!.click();
}

// A scriptless child's `@catch` on a page with client work: the page links
// the child's module, so its catch content resumes and the client renders it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { promise: Promise.resolve("ok") },
    {
      promise: new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("boom")), 10),
      ),
    },
    click,
  ],
};
