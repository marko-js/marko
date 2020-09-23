import {
  text,
  computeAsync,
  register,
  createRenderFn
} from "../../../../dom/index";
import { wait, resolveAfter } from "../../../utils/resolve";
import { after, over } from "../../utils/walks";
import { InputValue } from "../../utils/types";

export const FAILS_HYDRATE = true;
export const inputs = [
  {
    value: "Dynamic 1",
    delay: 3
  },
  wait(2),
  {
    value: "Dynamic 2",
    delay: 0
  },
  wait(2),
  {
    value: "Dynamic 3",
    delay: 1
  },
  wait(2)
];

export const template = `Static `;
export const walks = after + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: InputValue<typeof inputs>) => {
    text(
      computeAsync(
        async ([value, delay]) => await resolveAfter(value, delay),
        [input.value, input.delay] as const,
        0
      )
    );
  }
);

export default createRenderFn(template, walks, ["value", "delay"], hydrate);
