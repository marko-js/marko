import { dynamicText, register, computeAsync } from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";

export const wait = 2;
export const FAILS_HYDRATE = true;
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

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    dynamicText(
      computeAsync(async value => await resolveAfter(value, 1), [
        input.value
      ] as const)
    );
  }
);

renderer.input = ["value"];

export const html = `Static <!#T>`;
export default renderer;
