import {
  loopOf,
  computeProperty,
  text,
  register,
  createRenderer,
  createRenderFn
} from "../../../../src/dom/index";
import { get, over, inside } from "../../utils/walks";

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

export const template = `<div></div>`;
export const walks = inside + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: { children: Array<{ id: number; text: string }> }) => {
    loopOf(
      input.children,
      createRenderer(loop_template, loop_walks, undefined, item => {
        text(computeProperty("text", item));
      }),
      i => "" + i.id
    );
  }
);

const loop_template = " ";
const loop_walks = get + over(1);

export default createRenderFn(template, walks, ["children"], hydrate);
