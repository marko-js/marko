import {
  data,
  createRenderFn,
  on,
  source,
  queueHydrate,
  setSource,
  queueSource,
  bind,
  bindRenderer,
  Scope,
  destructureSources,
  dynamicClosure,
  createRenderer,
  conditional,
  dynamicSubscribers,
  hydrateSubscription,
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

const FancyButton$renderBodyDynamicTag = conditional(
  FancyButton$Index.COMMENT,
  1,
  (scope: FancyButton$ComponentScope) => {
    return scope[FancyButton$Index.RENDER_BODY];
  }
);

const FancyButton$renderBody = source(FancyButton$Index.RENDER_BODY, [
  FancyButton$renderBodyDynamicTag,
]);

const FancyButton$onclick = source(
  FancyButton$Index.ON_CLICK,
  [],
  (_scope: FancyButton$ComponentScope) => {
    queueHydrate(_scope, FancyButton$onclick_hydrate);
  }
);

export const FancyButton$onclick_hydrate = (
  scope: FancyButton$ComponentScope
) => {
  const onclick = scope[FancyButton$Index.ON_CLICK];

  on(scope[FancyButton$Index.BUTTON], "click", onclick);
};

export const FancyButton$attrs = destructureSources(
  [FancyButton$renderBody, FancyButton$onclick],
  (scope: ComponentScope, { renderBody, onclick }: any) => {
    setSource(scope, FancyButton$renderBody, renderBody);
    setSource(scope, FancyButton$onclick, onclick);
  }
);

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

export const setup = (scope: ComponentScope) => {
  setSource(scope, _clickCount, 0);
  setSource(scope[Index.FANCYBUTTON_SCOPE], FancyButton$attrs, {
    onclick: bind(scope, clickHandler),
    renderBody: bindRenderer(scope, renderBody),
  });
};

const _clickCount = source(Index.CLICK_COUNT, [
  dynamicSubscribers(Index.CLICK_COUNT),
]);

export const clickHandler = (scope: ComponentScope) => {
  queueSource(scope, _clickCount, scope[Index.CLICK_COUNT] + 1);
};

const clickCount$renderBody = dynamicClosure(
  1,
  Index.CLICK_COUNT,
  [],
  (scope: RenderBody$Scope, value: ComponentScope[Index.CLICK_COUNT]) => {
    data(scope[RenderBody$Index.TEXT], value);
  }
);

const enum RenderBody$Index {
  TEXT = "#text/0",
}

type RenderBody$Scope = Scope<{
  [RenderBody$Index.TEXT]: Text;
}>;

export const subscribe_clickCount$renderBody = hydrateSubscription(
  clickCount$renderBody,
  1,
  Index.CLICK_COUNT
);

const renderBody = createRenderer(" ", get + next(1), undefined, [
  clickCount$renderBody,
]);

export default createRenderFn(template, walks, setup);
