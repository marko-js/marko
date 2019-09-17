import {
  dynamicText,
  dynamicOn,
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

const renderer = (input: (typeof inputs)[0]) => {
  beginEl("button");
  const clickCount = new Signal(0);
  dynamicOn(
    "click",
    compute(() =>
      get(clickCount) <= 1
        ? () => {
            set(clickCount, get(clickCount) + 1);
          }
        : false
    )
  );
  dynamicText(clickCount);
  endEl();
};

renderer.input = ["value"];

export default renderer;
