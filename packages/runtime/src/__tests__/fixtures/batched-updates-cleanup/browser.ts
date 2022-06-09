import {
  on,
  createRenderer,
  createRenderFn,
  setConditionalRenderer,
  data,
  bind,
  source,
  closure,
  inConditionalScope,
  queueHydrate,
  Scope,
} from "../../../dom/index";

import { get, next, over } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const enum INDEX {
  button = 0,
  comment = 1,
  conditional = 1,
  conditional_scope = 2,
  show = 5,
  show_mark = 6,
  show_stale = 7,
  message = 8,
  message_mark = 9,
  message_stale = 10
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
  message_stale = 3
}

type Branch0Scope = Scope<{
  _: ComponentScope;
  [INDEX_BRANCH0.text]: Text;
  [INDEX_BRANCH0.message]: string
}>;

// <let/show = true/>
// <let/message = "hi"/>
// <button onclick() { message = "bye"; show = !show; }/>
// <if=show><span>${message}</span></if>

export const template = `<button></button><!>`;
export const walks = get + over(1) + get + over(1);
export const setup = (scope: ComponentScope) => {
  _setMessage(scope, "hi");
  _setShow(scope, true);
  queueHydrate(scope, _hydrate);
};

export const _hydrate = (scope: ComponentScope) => {
  on(scope[INDEX.button], "click", bind(scope, _onclick));
};

const _onclick = (scope: ComponentScope) => {
  _queueMessage(scope, "bye");
  _queueShow(scope, !scope[INDEX.show]);
};

const _message$if = closure(INDEX_BRANCH0.message, 2, 1, INDEX.message, [], (scope: Branch0Scope, message: string) => {
  data(scope[INDEX_BRANCH0.text], message);
})
const [_setShow, _queueShow] = source(INDEX.show, 1, [inConditionalScope(_message$if, s => s[INDEX.conditional_scope])], (scope: ComponentScope, show: boolean) => {
  setConditionalRenderer(scope, INDEX.conditional, show ? _if : undefined);
})
const [_setMessage, _queueMessage] = source(INDEX.message, 1, [inConditionalScope(_message$if, s => s[INDEX.conditional_scope])])

export default createRenderFn(template, walks, setup);

const _if = createRenderer(
  "<span> </span>",
  next(1) + get + next(1)
);
