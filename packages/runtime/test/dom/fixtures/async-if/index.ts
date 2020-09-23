import {
  computeAsync,
  conditional,
  register,
  createRenderer,
  createRenderFn
} from "../../../../dom/index";
import { wait, resolveAfter } from "../../../utils/resolve";
import { inside, over } from "../../utils/walks";
import { InputValue } from "../../utils/types";

export const FAILS_HYDRATE = true;
export const inputs = [
  { show: true },
  wait(2),
  { show: false },
  wait(2),
  { show: true },
  wait(2)
];

export const template = `<div></div>`;
export const walks = inside + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: InputValue<typeof inputs>) => {
    conditional(
      computeAsync(
        async show => (show ? resolveAfter(branch0, 1) : undefined),
        input.show,
        1
      )
    );
  }
);

const branch0_template = `<span>hi</span>`;
const branch0 = createRenderer(branch0_template);

export default createRenderFn(template, walks, ["show"], hydrate);
