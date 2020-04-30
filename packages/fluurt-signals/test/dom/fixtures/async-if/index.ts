import {
  computeAsync,
  conditional,
  register,
  createTemplate
} from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";
import { withTemplate, empty } from '../../../../dom/dom';

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
    const branch0 = withTemplate(() => {}, branch0_template);
    conditional(
      computeAsync(
        async show => (show ? resolveAfter(branch0, 1) : empty),
        [input.show]
      )
    );
  }
);

const branch0_template = createTemplate(`<span>hi</span>`);

renderer.input = ["show"];

export const html = `<div><!#F></div>`;
export default renderer;
