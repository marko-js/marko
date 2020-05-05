import {
  compute,
  walk,
  textContent,
  conditional,
  register,
  createRenderer,
  createRenderFn
} from "../../../../dom/index";
import { next, over, after, inside } from "../../utils/walks";

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

export const template = `<div><span></span><span></span></div>`;
export const walks = next(2) + after;
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
    conditional(compute(value => (value ? branch0 : undefined), [input.value]));
  }
);

const branch0_template = "<span></span>";
const branch0_walks = inside + over(1);

export default createRenderFn(template, walks, ["value"], hydrate);
