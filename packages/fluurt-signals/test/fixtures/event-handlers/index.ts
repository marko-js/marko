import {
  ContainerNode,
  dynamicText,
  on,
  compute,
  get,
  Signal,
  beginEl,
  endEl,
  set
} from "../../../src";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click, click, click] as const;

const renderer = (parent: ContainerNode, input: (typeof inputs)[0]) => {
  const button = beginEl("button", parent);
  const clickCount = new Signal(0);
  compute(() => {
    on(
      button,
      "click",
      get(clickCount) <= 1
        ? () => {
            set(clickCount, get(clickCount) + 1);
          }
        : false
    );
  });
  dynamicText(clickCount, button);
  endEl(button, parent);
};

renderer.input = ["value"];

export default renderer;
