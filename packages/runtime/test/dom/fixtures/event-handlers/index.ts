import {
  data,
  register,
  createRenderFn,
  on,
  read,
  ensureDelegated,
  queue,
  write,
  bind
} from "../../../../src/dom/index";
import { get, next, open, close } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click, click, click] as const;

const enum Index {
  BUTTON = 0,
  BUTTON_TEXT = 1,
  CLICK_COUNT = 2
}

type scope = {
  [Index.BUTTON]: HTMLButtonElement;
  [Index.BUTTON_TEXT]: Text;
  [Index.CLICK_COUNT]: number;
};

// <let/clickCount = 0/>
// <button onclick=(clickCount < 1 ? (() => clickCount++) : false)>${clickCount}</button>

export const template = `<button> </button>`;
export const walks = open(3) + get + next(1) + get + next(1) + close;
export const render = () => {
  write(Index.CLICK_COUNT, 0);
  renderClickCount();
  hydrate();
};

export const hydrate = register("", () => {
  hydrateClickCount();
});

const renderClickCount = () => {
  data(Index.BUTTON_TEXT, read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT));
};

const hydrateClickCount = () => {
  on(
    Index.BUTTON,
    "click",
    read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT) <= 1
      ? bind(clickHandler)
      : false
  );
};

const execClickCount = () => {
  renderClickCount();
  hydrateClickCount();
};

const clickHandler = () => {
  if (
    write(
      Index.CLICK_COUNT,
      read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT) + 1
    )
  ) {
    queue(execClickCount);
  }
};

export default createRenderFn(template, walks, render, 0);

ensureDelegated("click");
