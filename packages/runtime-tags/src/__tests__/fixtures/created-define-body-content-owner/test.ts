import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  for (const button of container.querySelectorAll("button")) button.click();
};

// patch-created-define-body-content-owner without patches: the client renders
// the body and the content its calling branch defines.
export const config: TestConfig = {
  skip_ssr: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
  ],
};
