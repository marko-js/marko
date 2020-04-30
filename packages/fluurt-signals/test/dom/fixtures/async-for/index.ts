import {
  loopOf,
  compute,
  computeAsync,
  get,
  register
} from "../../../../dom/index";
import { resolveAfter } from "../../../utils/resolve";
import { beginEl, dynamicText, endEl, createTemplate, withTemplate } from "../../../../dom/dom";

export const wait = 2;
export const FAILS_HYDRATE = true;
export const inputs = [
  {
    children: [
      {
        id: 1,
        text: "a"
      },
      {
        id: 2,
        text: "b"
      },
      {
        id: 3,
        text: "c"
      }
    ]
  },
  {
    children: [
      {
        id: 2,
        text: "b"
      },
      {
        id: 3,
        text: "c"
      },
      {
        id: 1,
        text: "a"
      }
    ]
  },
  {
    children: []
  }
];

const renderer = register(
  __dirname.split("/").pop()!,
  (input: { children: Array<{ id: number; text: string }> }) => {
    loopOf(
      computeAsync(async children => await resolveAfter(children, 1), [
        input.children
      ]),
      withTemplate(item => {
        dynamicText(compute(_item => get(_item).text, [item]));
      }, loop_template),
      i => "" + i.id
    );
  }
);

const loop_template = createTemplate(`<!#T>`);

renderer.input = ["children"];

export const html = `<div><!#F></div>`;
export default renderer;
