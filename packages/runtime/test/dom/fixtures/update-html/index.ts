import { html, register, createRenderFn } from "../../../../src/dom/index";
import { over, after } from "../../utils/walks";

export const inputs = [
  {
    value: "Hello <strong>World</strong>"
  },
  {
    value: "Some content"
  },
  {
    value: "<div/>"
  }
];

export const FAILS_HYDRATE = true;

// <em>Testing</em> $!{input.value}
export const template = "<em>Testing</em> ";
export const walks = over(1) + after + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: typeof inputs[number]) => {
    html(input.value);
  }
);

export default createRenderFn(template, walks, ["value"], hydrate);
