import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  skip_ssr: true,
  steps: [
    {
      t: "text",
      v: "a",
      attrs: { type: "text", value: "a" },
      rest: { value: "a" },
    },
    {
      t: "checkbox",
      v: "x",
      attrs: { type: "checkbox", value: "x" },
      rest: { value: "x" },
    },
    {
      t: "text",
      v: "y",
      attrs: { type: "text", value: "y" },
      rest: { value: "y" },
    },
    (document: Document) => {
      for (const input of document.querySelectorAll("input")) {
        input.value = "typed";
      }
    },
    {
      t: "checkbox",
      v: "y",
      attrs: { type: "checkbox", value: "y" },
      rest: { value: "y" },
    },
  ],
};
