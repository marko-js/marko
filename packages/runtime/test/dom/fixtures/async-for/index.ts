import {
  loopOf,
  text,
  computeProperty,
  computeAsync,
  register,
  createRenderer,
  createRenderFn
} from "../../../../dom/index";
import { wait, resolveAfter } from "../../../utils/resolve";
import { get, over, inside } from "../../utils/walks";
import { InputValue } from "../../utils/types";

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
  wait(2),
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
  wait(2),
  {
    children: []
  },
  wait(2)
];

export const template = `<div></div>`;
export const walks = inside + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: InputValue<typeof inputs>) => {
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
