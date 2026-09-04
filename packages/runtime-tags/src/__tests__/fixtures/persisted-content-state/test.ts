import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A body mixing parent state and a server value, fed to a server-owned
// child: clicks re-render client-side and patches write the server half.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", note: "x" },
    click,
    { title: "b", note: "y" },
    click,
    { title: "c", note: "z" },
  ],
};
