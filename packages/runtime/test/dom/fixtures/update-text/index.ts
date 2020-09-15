import { createRenderFn, register, text } from "../../../../dom/index";
import { after, over } from "../../utils/walks";

export const inputs = [
  {
    value: "Dynamic 1"
  },
  {
    value: "Dynamic 2"
  },
  {
    value: "Dynamic 3"
  }
];

// Static ${input.value}
export const template = "Static ";
export const walks = after + over(1);
export const hydrate = (input: (typeof inputs)[number]) => {
  text(input.value);
};

export default createRenderFn(template, walks, ["value"], hydrate);
register(__dirname.split("/").pop()!, hydrate);
