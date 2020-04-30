import {
  dynamicOn,
  compute,
  createSignal,
  set,
  register
} from "../../../../dom/index";

import { dynamicText, nextElementRef } from "../../../../dom/dom";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click, click, click] as const;

const renderer = register(
  __dirname.split("/").pop()!,
  (input: (typeof inputs)[0]) => {
    nextElementRef();
    const clickCount = createSignal(0);
    dynamicOn(
      "click",
      compute(
        count =>
          count <= 1
            ? () => {
                set(clickCount, count + 1);
              }
            : false,
        [clickCount]
      )
    );
    dynamicText(clickCount);
  }
);

renderer.input = ["value"];

export const html = `<button #><!#T></button>`;
export default renderer;
