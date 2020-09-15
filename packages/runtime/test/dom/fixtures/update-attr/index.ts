import { attr, walk, register, createRenderFn } from "../../../../dom/index";
import { get, over } from "../../utils/walks";

export const inputs = [
  {
    value: 1
  },
  {
    value: "1"
  },
  {
    value: "2"
  },
  {
    value: null
  },
  {
    value: "1"
  },
  {
    value: false
  }
];

// <div a=0 b=input.value/>
export const template = `<div a=0></div>`;
export const walks = get + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    walk();
    attr("b", input.value);
  }
);

export default createRenderFn(template, walks, ["value"], hydrate);
