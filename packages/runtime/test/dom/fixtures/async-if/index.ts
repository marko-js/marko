import {
  computeAsync,
  conditional,
  register,
  createRenderer,
  createRenderFn
} from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";
import { inside, over } from "../../utils/walks";

export const wait = 2;
export const FAILS_HYDRATE = true;
export const inputs = [
  { show: true },
  { show: false },
  { show: true }
] as const;

export const template = `<div></div>`;
export const walks = inside + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
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
