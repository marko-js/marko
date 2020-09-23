import {
  text,
  computeAsync,
  register,
  createRenderFn
} from "../../../../dom/index";
import { resolveAfter, wait } from "../../../utils/resolve";
import { after, over } from "../../utils/walks";
import { InputValue } from "../../utils/types";

export const FAILS_HYDRATE = true;
export const inputs = [
  {
    value: "Dynamic 1"
  },
  wait(2),
  {
    value: "Dynamic 2"
  },
  wait(2),
  {
    value: "Dynamic 3"
  },
  wait(2)
];

export const template = `Static `;
export const walks = after + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: InputValue<typeof inputs>) => {
    text(
      computeAsync(async value => await resolveAfter(value, 1), input.value, 1)
    );
  }
);

export default createRenderFn(template, walks, ["value"], hydrate);
