import { loopOf, compute, register } from "../../../../dom/index";

import { withTemplate, createTemplate, dynamicText } from "../../../../dom/dom";

export const inputs = [
  {
    children: [
      {
        id: 1,
        text: "a"
      },
      {
        id: 2,
        text: "b"
      },
      {
        id: 3,
        text: "c"
      }
    ]
  },
  {
    children: [
      {
        id: 1,
        text: "a"
      },
      {
        id: 3,
        text: "c"
      }
    ]
  },
  {
    children: [
      {
        id: 4,
        text: "d"
      },
      {
        id: 3,
        text: "c"
      }
    ]
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: { children: Array<{ id: number; text: string }> }) => {
    loopOf(
      input.children,
      withTemplate(item => {
        dynamicText(compute(_item => _item.text, [item]));
      }, loop_template),
      i => "" + i.id
    );
  }
);

const loop_template = createTemplate("<!#T>");

renderer.input = ["children"];

export const html = `<div><!#F></div>`;
export default renderer;
