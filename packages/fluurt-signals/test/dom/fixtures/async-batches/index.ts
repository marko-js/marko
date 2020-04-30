import { dynamicText, register, computeAsync } from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";

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

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[number]) => {
    dynamicText(input.sync);
    dynamicText(
      computeAsync(async value => await value, [input.async] as const)
    );
  }
);

renderer.input = ["sync", "async"];

export const html = `<!#T><!#T>`;
export default renderer;
