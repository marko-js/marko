import { beginEl, loop, compute, get, dynamicText, endEl } from "../../../src";

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
    children: []
  },
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
  }
];

const renderer = (input: { children: Array<{ id: number; text: string }> }) => {
  beginEl("div");
  loop(
    input.children,
    item => {
      dynamicText(compute(() => get(item).text));
    },
    i => "" + i.id
  );
  endEl();
};

renderer.input = ["children"];

export default renderer;
