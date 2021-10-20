import {
  data,
  createRenderFn,
  on,
  read,
  ensureDelegated,
  queue,
  write,
  bind
} from "../../../src/dom/index";
import { get, next, open, close } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click, click, click] as const;

const enum Index {
  BUTTON = 0,
  BUTTON_TEXT = 1,
  CLICK_COUNT = 2,
  EVENT_HANDLER = 3
}

type scope = {
  [Index.BUTTON]: HTMLButtonElement;
  [Index.BUTTON_TEXT]: Text;
  [Index.CLICK_COUNT]: number;
  [Index.EVENT_HANDLER]: false | (() => void);
};

// <let/clickCount = 0/>
// <button onclick=(clickCount < 1 ? (() => clickCount++) : false)>${clickCount}</button>

export const template = `<button> </button>`;
export const walks = open(3) + get + next(1) + get + next(1) + close;
export const render = () => {
  execClickCount(0);
};

const execClickCount = (value: scope[Index.CLICK_COUNT]) => {
  if (write(Index.CLICK_COUNT, value)) {
    data(Index.BUTTON_TEXT, value);
    execClickHandler(value <= 1 ? bind(clickHandler) : false);
  }
};

const execClickHandler = (value: scope[Index.EVENT_HANDLER]) => {
  if (write(Index.EVENT_HANDLER, value)) {
    attachEventHandler();
  }
};

export const attachEventHandler = () => {
  on(
    Index.BUTTON,
    "click",
    read<scope, Index.EVENT_HANDLER>(Index.EVENT_HANDLER)
  );
};

const clickHandler = () => {
  queue(
    execClickCount as any,
    Index.CLICK_COUNT,
    read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT) + 1
  );
};

export default createRenderFn(template, walks, render, 0);

ensureDelegated("click");
