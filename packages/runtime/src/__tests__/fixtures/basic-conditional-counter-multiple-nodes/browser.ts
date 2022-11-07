import {
  on,
  createRenderer,
  createRenderFn,
  conditional,
  data,
  bind,
  source,
  setSource,
  queueSource,
  closure,
  inConditionalScope,
  queueHydrate,
  Scope,
  staticNodesFragment,
} from "@marko/runtime-fluurt/src/dom";

import { get, next, over, replace } from "../../utils/walks";

const enum INDEX {
  button = 0,
  button2 = 1,
  comment = 2,
  conditional = 2,
  show = 8,
  count = 9,
}

type ComponentScope = Scope<{
  [INDEX.button]: HTMLButtonElement;
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.show]: boolean;
  [INDEX.count]: string;
}>;

const enum INDEX_BRANCH0 {
  text = 0,
  count = 1,
}

type Branch0Scope = Scope<{
  _: ComponentScope;
  [INDEX_BRANCH0.text]: Text;
  [INDEX_BRANCH0.count]: string;
}>;

// <let/show = true/>
// <let/count = 0/>
// <button.inc onclick() { count++; }/>
// <button.toggle onclick() { show = !show; }/>
// <if=show><if=show>The count is ${count}</if></if>

export const template = `<button class="inc"></button><button class="toggle"></button><!>`;
export const walks = get + over(1) + get + over(1) + get + over(1);
export const setup = (scope: ComponentScope) => {
  setSource(scope, _count, 0);
  setSource(scope, _show, true);
  queueHydrate(scope, _hydrate);
};

export const _hydrate = (scope: ComponentScope) => {
  on(scope[INDEX.button], "click", bind(scope, _onclick));
  on(scope[INDEX.button2], "click", bind(scope, _onclick2));
};

const _onclick = (scope: ComponentScope) => {
  queueSource(scope, _count, scope[INDEX.count] + 1);
};

const _onclick2 = (scope: ComponentScope) => {
  queueSource(scope, _show, !scope[INDEX.show]);
};

const _count$if = closure(
  1,
  INDEX.count,
  [],
  (scope: Branch0Scope, count: string) => {
    data(scope[INDEX_BRANCH0.text], count);
  }
);
const _if = conditional(
  INDEX.conditional,
  1,
  (scope: ComponentScope) => (scope[INDEX.show] ? _ifBody : undefined),
  staticNodesFragment
);
const _show = source(INDEX.show, [_if]);
const _count = source(INDEX.count, [
  inConditionalScope(_count$if, INDEX.conditional),
]);

export default createRenderFn(template, walks, setup);

export const _ifBody = createRenderer(
  "The count is <!>",
  next(1) + replace + next(1),
  undefined,
  [_count$if]
);
