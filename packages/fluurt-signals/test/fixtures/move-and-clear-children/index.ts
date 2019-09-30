import { loop, compute, get, register } from "../../../src";

import { beginEl, dynamicText, endEl } from "../../../src/dom";

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
        id: 2,
        text: "b"
      },
      {
        id: 3,
        text: "c"
      },
      {
        id: 1,
        text: "a"
      }
    ]
  },
  {
    children: []
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: { children: Array<{ id: number; text: string }> }) => {
    beginEl("div");
    loop(
      input.children,
      item => {
        dynamicText(compute(() => get(item).text));
      },
      i => "" + i.id
    );
    endEl();
  }
);

renderer.input = ["children"];

export default renderer;
