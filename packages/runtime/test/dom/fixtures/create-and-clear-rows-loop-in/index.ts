import {
  loopIn,
  text,
  register,
  createRenderer,
  createRenderFn
} from "../../../../src/dom/index";
import { over, inside, get } from "../../utils/walks";

export const inputs = [
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c"
    }
  },
  {
    children: {}
  },
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c"
    }
  }
];

export const template = `<div></div>`;
export const walks = inside + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: { children: { [x: string]: string } }) => {
    loopIn(
      input.children,
      createRenderer(loop_template, loop_walks, undefined, (_, value) => {
        text(value);
      })
    );
  }
);

const loop_template = " ";
const loop_walks = get + over(1);

export default createRenderFn(template, walks, ["children"], hydrate);
