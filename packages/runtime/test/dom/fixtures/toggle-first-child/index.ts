import {
  compute,
  walk,
  textContent,
  conditional,
  register,
  createRenderer,
  createRenderFn
} from "../../../../src/dom/index";
import { next, over, get } from "../../utils/walks";

export const inputs = [
  {
    value: "Hello"
  },
  {
    value: false
  },
  {
    value: "World"
  },
  {
    value: "!"
  }
];

export const template = `<div><!><span></span><span></span></div>`;
export const walks = next(1) + get + over(3);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: { value: string | undefined }) => {
    const branch0 = createRenderer(
      branch0_template,
      branch0_walks,
      undefined,
      () => {
        walk();
        textContent(input.value);
      }
    );
    conditional(
      compute(value => (value ? branch0 : undefined), input.value, 1)
    );
  }
);

const branch0_template = "<span></span>";
const branch0_walks = get + over(1);

export default createRenderFn(template, walks, ["value"], hydrate);
