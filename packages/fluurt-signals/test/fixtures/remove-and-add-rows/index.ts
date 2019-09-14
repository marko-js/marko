import {
  beginEl,
  loop,
  ContainerNode,
  compute,
  get,
  dynamicText,
  endEl
} from "../../../src";

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

const renderer = (
  parent: ContainerNode,
  input: { children: Array<{ id: number; text: string }> }
) => {
  const div = beginEl("div", parent);
  loop(
    input.children,
    (loopParent, item) => {
      dynamicText(compute(() => get(item).text), loopParent);
    },
    div,
    i => "" + i.id
  );
  endEl(div, parent);
};

renderer.input = ["children"];

export default renderer;
