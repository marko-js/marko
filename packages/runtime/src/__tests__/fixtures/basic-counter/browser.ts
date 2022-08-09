import {
  data,
  createRenderFn,
  on,
  source,
  queueHydrate,
  setSource,
  queueSource,
  bind,
  Scope,
} from "../../../dom/index";
import { get, next } from "../../utils/walks";

const enum Index {
  BUTTON = 0,
  BUTTON_TEXT = 1,
  CLICK_COUNT = 2,
  CLICK_COUNT_MARK = 3,
}

type ComponentScope = Scope<{
  [Index.BUTTON]: HTMLButtonElement;
  [Index.BUTTON_TEXT]: Text;
  [Index.CLICK_COUNT]: number;
  [Index.CLICK_COUNT_MARK]: number;
}>;

// <let/clickCount = 0/>
// <button onclick() { clickCount++ }>${clickCount}</button>

export const template = `<button> </button>`;
export const walks = get + next(1) + get + next(1);
export const setup = (scope: ComponentScope) => {
  setSource(scope, _clickCount, 0);
  queueHydrate(scope, hydrate);
};

export const hydrate = (scope: ComponentScope) => {
  on(scope[Index.BUTTON], "click", bind(scope, clickHandler));
};

const _clickCount = source(
  Index.CLICK_COUNT,
  [],
  (scope: ComponentScope, value: ComponentScope[Index.CLICK_COUNT]) => {
    data(scope[Index.BUTTON_TEXT], value);
  }
);

const clickHandler = (scope: ComponentScope) => {
  queueSource(scope, _clickCount, scope[Index.CLICK_COUNT] + 1);
};

export default createRenderFn(template, walks, setup);
