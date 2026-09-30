import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// A full-document template cannot client-mount into a body.
export const config: TestConfig = {
  skip_csr: true,
  steps: [
    { styles: ["/a.css"] },
    (document: Document) => {
      document.body.append(document.createElement("aside"));
    },
    click("button"),
  ],
};
