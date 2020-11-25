import {
  loopOf,
  text,
  computeProperty,
  register,
  createRenderer,
  createRenderFn
} from "../../../../src/dom/index";
import { over, inside, get } from "../../utils/walks";

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

export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: { children: Array<{ id: number; text: string }> }) => {
    loopOf(
      input.children,
      createRenderer(loop_template, loop_walks, undefined, item => {
        text(computeProperty("text", item));
      }),
      i => "" + i.id,
      false,
      true
    );
  }
);

const loop_template = " ";
const loop_walks = get + over(1);

export default createRenderFn(template, walks, ["children"], hydrate);
