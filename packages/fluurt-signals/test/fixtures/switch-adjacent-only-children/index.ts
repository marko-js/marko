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
