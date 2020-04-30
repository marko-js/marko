import { dynamicText, register, computeAsync } from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";

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

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    dynamicText(
      computeAsync(async (value, delay) => await resolveAfter(value, delay), [
        input.value,
        input.delay
      ] as const)
    );
  }
);

renderer.input = ["value", "delay"];

export const html = `Static <!#T>`;
export default renderer;
