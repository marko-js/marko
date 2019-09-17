import { beginEl, attr, endEl, text, dynamicTag } from "../../../src";

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

const renderer = (input: (typeof inputs)[number]) => {
  dynamicTag(input.tag, { a: 1 }, () => {
    text("BODY");
  });
};

renderer.input = ["tag"];

export default renderer;
