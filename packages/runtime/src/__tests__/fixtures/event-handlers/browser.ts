import {
  data,
  createRenderFn,
  on,
  source,
  derivation,
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
  EVENT_HANDLER = 4,
}

type ComponentScope = Scope<{
  [Index.BUTTON]: HTMLButtonElement;
  [Index.BUTTON_TEXT]: Text;
  [Index.CLICK_COUNT]: number;
  [Index.EVENT_HANDLER]: false | (() => void);
}>;

// <let/clickCount = 0/>
// <button onclick=(clickCount <= 1 ? (() => clickCount++) : false)>${clickCount}</button>

export const template = `<button> </button>`;
export const walks = get + next(1) + get + next(1);
export const setup = (scope: ComponentScope) => {
  setSource(scope, _clickCount, 0);
};

export const hydrateEventHandler = (scope: ComponentScope) => {
  on(scope[Index.BUTTON], "click", scope[Index.EVENT_HANDLER]);
};

const _eventHandler = derivation(
  Index.EVENT_HANDLER,
  1,
  [],
  (scope: ComponentScope) =>
    scope[Index.CLICK_COUNT] <= 1 ? bind(scope, clickHandler) : false,
  (scope: ComponentScope) => {
    queueHydrate(scope, hydrateEventHandler);
  }
);

const _clickCount = source(
  Index.CLICK_COUNT,
  [_eventHandler],
  (scope: ComponentScope, value: ComponentScope[Index.CLICK_COUNT]) => {
    data(scope[Index.BUTTON_TEXT], value);
  }
);

const clickHandler = (scope: ComponentScope) => {
  queueSource(scope, _clickCount, scope[Index.CLICK_COUNT] + 1);
};

export default createRenderFn(template, walks, setup);
