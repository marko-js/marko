import { attr, dynamicTag, register } from "../../../../src/dom";

import { beginEl, endEl, text } from "../../../../src/dom/dom";

export const inputs = [
  {
    tag: "span"
  },
  {
    tag: () => {
      text("Hello");
    }
  },
  {
    tag: "span"
  },
  {
    tag: "a"
  },
  {
    tag: Object.assign(
      (input: { a: 1; renderBody: () => void }) => {
        beginEl("div");
        attr("a", input.a);
        input.renderBody();
        endEl();
      },
      { input: ["a", "renderBody"] }
    )
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    dynamicTag(input.tag, { a: 1 }, () => {
      text("BODY");
    });
  }
);

renderer.input = ["tag"];

export default renderer;
