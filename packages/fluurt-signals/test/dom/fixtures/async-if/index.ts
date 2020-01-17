import {
  computeAsync,
  conditional,
  register,
  text,
  beginEl,
  endEl
} from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";

export const wait = 2;
export const FAILS_HYDRATE = true;
export const inputs = [
  { show: true },
  { show: false },
  { show: true }
] as const;

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    beginEl("div");
    const branch0 = () => {
      beginEl("span");
      text("hi");
      endEl();
    };
    conditional(
      computeAsync(
        async show => (show ? resolveAfter(branch0, 1) : undefined),
        [input.show]
      )
    );
    endEl();
  }
);

renderer.input = ["show"];

export default renderer;
