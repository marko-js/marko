import {
  data,
  createRenderFn,
  on,
  queueEffect,
  queueSource,
  bindRenderer,
  Scope,
  dynamicClosure,
  createRenderer,
  conditional,
  dynamicSubscribers,
  resumeSubscription,
  value,
  bindFunction,
} from "@marko/runtime-fluurt/src/dom";
import { get, next, beginChild, endChild } from "../../utils/walks";

////////////////////////////////////////////////////
// FancyButton
////////////////////////////////////////////////////
// <attrs/{ renderBody, onclick }/>
// <button onclick=onclick><${renderBody}/></button>

const enum FancyButton$Index {
  BUTTON = "#button/0",
  COMMENT = "#comment/1",
  RENDER_BODY = "renderBody",
  ON_CLICK = "onClick",
}

type FancyButton$ComponentScope = Scope<{
  [FancyButton$Index.BUTTON]: HTMLButtonElement;
  [FancyButton$Index.COMMENT]: Comment;
  [FancyButton$Index.RENDER_BODY]: any;
  [FancyButton$Index.ON_CLICK]: (e: Event) => void;
}>;

const FancyButton$template = `<button><!></button>`;
const FancyButton$walks = get + next(1) + get + next(1);

export const FancyButton$attrs = (
  scope: Scope,
  value: any,
  clean?: boolean | 1
) => {
  let renderBody, onclick;
  if (!clean) {
    ({ renderBody, onclick } = value);
  }
  FancyButton$renderBody(scope, renderBody, clean);
  FancyButton$onclick(scope, onclick, clean);
};

const FancyButton$renderBodyDynamicTag = conditional(FancyButton$Index.COMMENT);

const FancyButton$renderBody = value(
  FancyButton$Index.RENDER_BODY,
  (scope, value: any) => {
    FancyButton$renderBodyDynamicTag(scope, value);
  },
  undefined,
  FancyButton$renderBodyDynamicTag
);

const FancyButton$onclick = value(FancyButton$Index.ON_CLICK, (_scope) => {
  queueEffect(_scope, FancyButton$onclick_effect);
});

export const FancyButton$onclick_effect = (scope: Scope) => {
  const onclick = scope[FancyButton$Index.ON_CLICK];

  on(scope[FancyButton$Index.BUTTON], "click", onclick);
};

export const FancyButton = createRenderFn(
  FancyButton$template,
  FancyButton$walks,
  undefined,
  FancyButton$attrs
);

/////////////////////////
// Main
/////////////////////////
// <let/clickCount = 0/>
// <FancyButton onClick() { clickCount++ }>${input.clickCount}</FancyButton>

const enum Index {
  FANCYBUTTON_SCOPE = "#childScope/0",
  CLICK_COUNT = "clickCount",
}

type ComponentScope = Scope<{
  [Index.CLICK_COUNT]: number;
  [Index.FANCYBUTTON_SCOPE]: FancyButton$ComponentScope;
}>;

export const template = `${FancyButton$template}`;
export const walks = `${beginChild}${FancyButton$walks}${endChild}`;

export const setup = (scope: Scope) => {
  _clickCount(scope, 0);
  FancyButton$attrs(scope[Index.FANCYBUTTON_SCOPE], {
    onclick: bindFunction(scope, clickHandler),
    renderBody: bindRenderer(scope, renderBody),
  });
};

const _clickCount = value(
  Index.CLICK_COUNT,
  undefined,
  dynamicSubscribers(Index.CLICK_COUNT)
);

export const clickHandler = (scope: Scope) => {
  queueSource(scope, _clickCount, scope[Index.CLICK_COUNT] + 1);
};

const clickCount$renderBody = dynamicClosure(
  Index.CLICK_COUNT,
  (scope: Scope, value: ComponentScope[Index.CLICK_COUNT]) => {
    data(scope[RenderBody$Index.TEXT], value);
  }
);

const enum RenderBody$Index {
  TEXT = "#text/0",
}

// type RenderBody$Scope = Scope<{
//   [RenderBody$Index.TEXT]: Text;
// }>;

export const subscribe_clickCount$renderBody = resumeSubscription(
  clickCount$renderBody,
  Index.CLICK_COUNT
);

const renderBody = createRenderer(" ", get + next(1), undefined, [
  clickCount$renderBody,
]);

export default createRenderFn(template, walks, setup);
