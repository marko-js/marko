import {
  el,
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

const renderer = (
  parent: ContainerNode,
  input: { children: Array<{ id: number; text: string }> }
) => {
  const div = el("div", parent);
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
