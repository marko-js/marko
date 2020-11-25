import {
  compute,
  walk,
  textContent,
  conditional,
  register,
  createRenderer,
  createRenderFn
} from "../../../../src/dom/index";
import { next, over, get } from "../../utils/walks";

export const inputs = [
  {
    show: false,
    value1: "Hello",
    value2: "World"
  },
  {
    show: true,
    value1: "Hello",
    value2: "World"
  },
  {
    show: true,
    value1: false,
    value2: "World"
  },
  {
    show: true,
    value1: "Goodbye",
    value2: "World"
  },
  {
    show: false,
    value1: "Goodbye",
    value2: "World"
  }
];

export const template = `<div><!></div>`;
export const walks = next(1) + get + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: {
    show: boolean;
    value1: string | undefined;
    value2: string | undefined;
  }) => {
    const branch0 = createRenderer(
      branch0_template,
      branch0_walks,
      undefined,
      () => {
        const branch1 = createRenderer(
          branch1_template,
          branch1_walks,
          undefined,
          () => {
            walk();
            textContent(input.value1);
          }
        );
        const branch2 = createRenderer(
          branch2_template,
          branch2_walks,
          undefined,
          () => {
            walk();
            textContent(input.value2);
          }
        );
        conditional(
          compute(value1 => (value1 ? branch1 : undefined), input.value1, 1)
        );
        conditional(
          compute(value2 => (value2 ? branch2 : undefined), input.value2, 1)
        );
      }
    );
    conditional(compute(show => (show ? branch0 : undefined), input.show, 1));
  }
);

const branch0_template = "<!><!>";
const branch0_walks = get + over(1) + get + over(1);

const branch1_template = "<span></span>";
const branch1_walks = get + over(1);

const branch2_template = "<span></span>";
const branch2_walks = get + over(1);

export default createRenderFn(
  template,
  walks,
  ["show", "value1", "value2"],
  hydrate
);
