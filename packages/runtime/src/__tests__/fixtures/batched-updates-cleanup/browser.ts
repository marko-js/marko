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
} from "@marko/runtime-fluurt/src/dom";

import { get, next, over } from "../../utils/walks";

const enum INDEX {
  button = 0,
  comment = 1,
  conditional = 1,
  show = 7,
  show_mark = 8,
  show_stale = 9,
  message = 10,
  message_mark = 11,
  message_stale = 12,
}

type ComponentScope = Scope<{
  [INDEX.button]: HTMLButtonElement;
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.show]: boolean;
  [INDEX.message]: string;
}>;

const enum INDEX_BRANCH0 {
  text = 0,
  message = 1,
  message_mark = 2,
  message_stale = 3,
}

type Branch0Scope = Scope<{
  _: ComponentScope;
  [INDEX_BRANCH0.text]: Text;
  [INDEX_BRANCH0.message]: string;
}>;

// <let/show = true/>
// <let/message = "hi"/>
// <button onclick() { message = "bye"; show = !show; }/>
// <if=show><span>${message}</span></if>

export const template = `<button></button><!>`;
export const walks = get + over(1) + get + over(1);
export const setup = (scope: ComponentScope) => {
  setSource(scope, _message, "hi");
  setSource(scope, _show, true);
  queueHydrate(scope, _hydrate);
};

export const _hydrate = (scope: ComponentScope) => {
  on(scope[INDEX.button], "click", bind(scope, _onclick));
};

const _onclick = (scope: ComponentScope) => {
  queueSource(scope, _message, "bye");
  queueSource(scope, _show, !scope[INDEX.show]);
};

const _message$if = closure(
  1,
  INDEX.message,
  [],
  (scope: Branch0Scope, message: string) => {
    data(scope[INDEX_BRANCH0.text], message);
  }
);
const _if = conditional(INDEX.conditional, 1, (scope: ComponentScope) =>
  scope[INDEX.show] ? _ifBody : undefined
);
const _show = source(INDEX.show, [_if]);
const _message = source(INDEX.message, [
  inConditionalScope(_message$if, INDEX.conditional),
]);

export default createRenderFn(template, walks, setup);

const _ifBody = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  undefined,
  [_message$if]
);
