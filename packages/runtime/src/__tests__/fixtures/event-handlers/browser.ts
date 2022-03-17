import {
  data,
  createRenderFn,
  on,
  queue,
  write,
  bind,
  Scope,
} from "../../../dom/index";
import { get, next } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click, click, click] as const;

const enum Index {
  BUTTON = 0,
  BUTTON_TEXT = 1,
  CLICK_COUNT = 2,
  EVENT_HANDLER = 3,
}

type ComponentScope = Scope<{
  [Index.BUTTON]: HTMLButtonElement;
  [Index.BUTTON_TEXT]: Text;
  [Index.CLICK_COUNT]: number;
  [Index.EVENT_HANDLER]: false | (() => void);
}>;

// <let/clickCount = 0/>
// <button onclick=(clickCount < 1 ? (() => clickCount++) : false)>${clickCount}</button>

export const template = `<button> </button>`;
export const walks = get + next(1) + get + next(1);
export const render = (scope: ComponentScope) => {
  execClickCount(scope, 0);
};

const execClickCount = (
  scope: ComponentScope,
  value: ComponentScope[Index.CLICK_COUNT]
) => {
  if (write(scope, Index.CLICK_COUNT, value)) {
    data(scope, Index.BUTTON_TEXT, value);
    execClickHandler(scope, value <= 1 ? bind(scope, clickHandler) : false);
  }
};

const execClickHandler = (
  scope: ComponentScope,
  value: ComponentScope[Index.EVENT_HANDLER]
) => {
  if (write(scope, Index.EVENT_HANDLER, value)) {
    attachEventHandler(scope);
  }
};

export const attachEventHandler = (scope: ComponentScope) => {
  on(scope, Index.BUTTON, "click", scope[Index.EVENT_HANDLER] as () => void);
};

const clickHandler = (scope: ComponentScope) => {
  queue(scope, execClickCount, Index.CLICK_COUNT, scope[Index.CLICK_COUNT] + 1);
};

export default createRenderFn(template, walks, render);
