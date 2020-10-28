import {
  loopFrom,
  text,
  register,
  createRenderer,
  createRenderFn
} from "../../../../src/dom/index";
import { over, inside, get } from "../../utils/walks";

export const inputs = [
  {
    from: 0,
    to: 3,
    step: 1
  },
  {
    from: 0,
    to: -1,
    step: 1
  },
  {
    from: 0,
    to: 3,
    step: 1
  }
];

export const template = `<div></div>`;
export const walks = inside + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: typeof inputs[0]) => {
    loopFrom(
      input.from,
      input.to,
      input.step,
      createRenderer(loop_template, loop_walks, undefined, i => text(i))
    );
  }
);

const loop_template = " ";
const loop_walks = get + over(1);

export default createRenderFn(template, walks, ["from", "to", "step"], hydrate);
