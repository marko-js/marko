import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A param-only local `<const>` joined with state is a server-owned local:
// its partial writes it, so paired scopes refresh and a construct paints.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, title: "Store" },
    click,
    { show: true, title: "Store!" },
    { show: false, title: "Store!" },
    { show: true, title: "Fresh" },
    click,
  ],
};
