import { loopOf, compute, get, register } from "../../../../dom/index";

import { beginEl, dynamicText, endEl, createTemplate, withTemplate } from "../../../../dom/dom";

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
      }
    ]
  },
  {
    children: [
      {
        id: 2,
        text: "c"
      },
      {
        id: 1,
        text: "d"
      }
    ]
  },
  {
    children: [
      {
        id: 1,
        text: "d"
      },
      {
        id: 2,
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

export const html = `<div><!#F></div>`
export default renderer;
