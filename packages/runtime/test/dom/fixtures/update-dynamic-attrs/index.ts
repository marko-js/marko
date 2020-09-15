import { attrs, walk, register, createRenderFn } from "../../../../dom/index";
import { get, over } from "../../utils/walks";

export const inputs = [
  {
    value: { a: 1, b: 2 }
  },
  {
    value: { b: 2, c: 3 }
  },
  {
    value: {}
  },
  {
    value: null
  },
  {
    value: { a: 1 }
  }
];

// <div ...input.value/>
export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    walk();
    attrs(input.value);
  }
);

export default createRenderFn(template, walks, ["value"], hydrate);
