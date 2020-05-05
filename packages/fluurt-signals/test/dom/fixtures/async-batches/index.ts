import {
  text,
  computeAsync,
  register,
  createRenderFn
} from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";
import { before, get, over } from "../../utils/walks";

export const wait = 2;
export const FAILS_HYDRATE = true;
export const inputs = [
  {
    sync: "a",
    async: resolveAfter("A", 1)
  },
  {
    sync: "b",
    async: resolveAfter("B", 1)
  },
  {
    sync: "c",
    async: resolveAfter("C", 1)
  }
];

export const template = ` `;
export const walks = before + get + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    text(input.sync);
    text(computeAsync(async value => await value, [input.async] as const));
  }
);

export default createRenderFn(template, walks, ["sync", "async"], hydrate);
