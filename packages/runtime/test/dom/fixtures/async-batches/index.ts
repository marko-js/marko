import {
  text,
  computeAsync,
  register,
  createRenderFn
} from "../../../../dom/index";
import { wait, resolveAfter } from "../../../utils/resolve";
import { before, get, over } from "../../utils/walks";
import { InputValue } from "../../utils/types";

export const FAILS_HYDRATE = true;
export const inputs = [
  {
    sync: "a",
    async: resolveAfter("A", 1)
  },
  wait(2),
  {
    sync: "b",
    async: resolveAfter("B", 1)
  },
  wait(2),
  {
    sync: "c",
    async: resolveAfter("C", 1)
  },
  wait(2)
];

export const template = ` `;
export const walks = before + get + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: InputValue<typeof inputs>) => {
    text(input.sync);
    text(computeAsync(async value => await value, input.async, 1));
  }
);

export default createRenderFn(template, walks, ["sync", "async"], hydrate);
