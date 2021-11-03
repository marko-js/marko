import {
  data,
  createRenderFn,
  on,
  read,
  queue,
  write,
  bind,
} from "../../../dom/index";
import { get, next, open, close } from "../../utils/walks";

const enum Index {
  BUTTON = 0,
  BUTTON_TEXT = 1,
  CLICK_COUNT = 2,
}

type scope = {
  [Index.BUTTON]: HTMLButtonElement;
  [Index.BUTTON_TEXT]: Text;
  [Index.CLICK_COUNT]: number;
};

// <let/clickCount = 0/>
// <button onclick() { clickCount++ }>${clickCount}</button>

export const template = `<button> </button>`;
export const walks = open(3) + get + next(1) + get + next(1) + close;
export const render = () => {
  renderClickCount(0);
  hydrate();
};

export const hydrate = () => {
  on(Index.BUTTON, "click", bind(clickHandler));
};

const renderClickCount = (value: scope[Index.CLICK_COUNT]) => {
  if (write(Index.CLICK_COUNT, value)) {
    data(Index.BUTTON_TEXT, value);
  }
};

const clickHandler = () => {
  queue(
    renderClickCount,
    Index.CLICK_COUNT,
    read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT) + 1
  );
};

export default createRenderFn(template, walks, render, 0);
