import {
  loopOf,
  text,
  computeProperty,
  computeAsync,
  register,
  createRenderer,
  createRenderFn
} from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";
import { get, over, inside } from "../../utils/walks";

export const wait = 2;
export const FAILS_HYDRATE = true;
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

export const template = `<div></div>`;
export const walks = inside + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: { children: Array<{ id: number; text: string }> }) => {
    loopOf(
      computeAsync(
        async children => await resolveAfter(children, 1),
        input.children,
        1
      ),
      createRenderer(loop_template, loop_walks, undefined, item => {
        text(computeProperty("text", item));
      }),
      i => "" + i.id
    );
  }
);

const loop_template = ` `;
const loop_walks = get + over(1);

export default createRenderFn(template, walks, ["children"], hydrate);
