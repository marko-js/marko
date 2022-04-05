import {
  data,
  createRenderFn,
  on,
  queue,
  queueHydrate,
  write,
  bind,
  Scope,
} from "../../../dom/index";
import { get, next } from "../../utils/walks";

const enum Index {
  BUTTON = 0,
  BUTTON_TEXT = 1,
  CLICK_COUNT = 2,
}

type ComponentScope = Scope<{
  [Index.BUTTON]: HTMLButtonElement;
  [Index.BUTTON_TEXT]: Text;
  [Index.CLICK_COUNT]: number;
}>;

// <let/clickCount = 0/>
// <button onclick() { clickCount++ }>${clickCount}</button>

export const template = `<button> </button>`;
export const walks = get + next(1) + get + next(1);
export const render = (scope: ComponentScope) => {
  renderClickCount(scope, 0);
  queueHydrate(scope, hydrate);
};

export const hydrate = (scope: ComponentScope) => {
  on(scope[Index.BUTTON], "click", bind(scope, clickHandler));
};

const renderClickCount = (
  scope: ComponentScope,
  value: ComponentScope[Index.CLICK_COUNT]
) => {
  if (write(scope, Index.CLICK_COUNT, value)) {
    data(scope[Index.BUTTON_TEXT], value);
  }
};

const clickHandler = (scope: ComponentScope) => {
  queue(
    scope,
    renderClickCount,
    Index.CLICK_COUNT,
    scope[Index.CLICK_COUNT] + 1
  );
};

export default createRenderFn(template, walks, render);
