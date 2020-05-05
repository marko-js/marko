import {
  text,
  computeAsync,
  register,
  createRenderFn
} from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";
import { after, over } from "../../utils/walks";

export const wait = 2;
export const FAILS_HYDRATE = true;
export const inputs = [
  {
    value: "Dynamic 1",
    delay: 3
  },
  {
    value: "Dynamic 2",
    delay: 0
  },
  {
    value: "Dynamic 3",
    delay: 1
  }
];

export const template = `Static `;
export const walks = after + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    text(
      computeAsync(async (value, delay) => await resolveAfter(value, delay), [
        input.value,
        input.delay
      ] as const)
    );
  }
);

export default createRenderFn(template, walks, ["value", "delay"], hydrate);
