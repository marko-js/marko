import {
  compute,
  textContent,
  conditional,
  register,
  createRenderer,
  createRenderFn,
  walk
} from "../../../../src/dom/index";
import { get, inside, over } from "../../utils/walks";

export const inputs = [
  {
    value: { name: "Jack" },
    visible: true
  },
  {
    value: undefined,
    visible: false
  },
  {
    value: { name: "Jake" },
    visible: true
  }
];

export const template = `<div></div>`;
export const walks = inside + over(1);
export const hydrate = register(
  __dirname.split("/").pop()!,
  (input: { value: { name: string } | undefined; visible: boolean }) => {
    const branch0 = createRenderer(
      branch0_template,
      branch0_walks,
      undefined,
      () => {
        walk();
        textContent(compute(value => value!.name, input.value, 1, true));
      }
    );
    conditional(
      compute(visible => (visible ? branch0 : undefined), input.visible, 1)
    );
  }
);

const branch0_template = "<span></span>";
const branch0_walks = get + over(1);

export default createRenderFn(template, walks, ["visible", "value"], hydrate);
