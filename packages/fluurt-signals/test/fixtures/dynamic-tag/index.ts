import { el, ContainerNode, attr, endEl, text, dynamicTag } from "../../../src";

export const inputs = [
  {
    tag: "span"
  },
  {
    tag: (parent: ContainerNode) => {
      text("Hello", parent);
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
      (
        parent: ContainerNode,
        input: { a: 1; renderBody: (p: ContainerNode) => void }
      ) => {
        const div = el("div", parent);
        attr(div, "a", input.a);
        input.renderBody(div);
        endEl(div, parent);
      },
      { input: ["a", "renderBody"] }
    )
  }
];

const renderer = (parent: ContainerNode, input: (typeof inputs)[number]) => {
  dynamicTag(input.tag, { a: 1 }, parent, (tag: ContainerNode) => {
    text("BODY", tag);
  });
};

renderer.input = ["tag"];

export default renderer;
