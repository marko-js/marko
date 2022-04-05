import {
  on,
  createRenderer,
  createRenderFn,
  setConditionalRenderer,
  data,
  queue,
  write,
  bind,
  queueInBranch,
  Scope,
} from "../../../dom/index";

import { get, next, over } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const enum Index {
  BUTTON = 0,
  COMMENT = 1,
  CONDITIONAL = 1,
  SHOW = 5,
  MESSAGE = 6,
}

const enum Priority {
  SHOW = 0,
  MESSAGE = 1,
  MESSAGE_SHOW = 2,
}

type ComponentScope = Scope<{
  [Index.BUTTON]: HTMLButtonElement;
  [Index.COMMENT]: Comment;
  [Index.CONDITIONAL]: Comment;
  [Index.SHOW]: boolean;
  [Index.MESSAGE]: string;
}>;

// <let/show = true/>
// <let/message = "hi"/>
// <button onclick() { message = "bye"; show = !show; }/>
// <if=show><span>${message}</span></if>

export const template = `<button></button><!>`;
export const walks = get + over(1) + get + over(1);
export const render = (scope: ComponentScope) => {
  _apply_show(scope, true);
  _apply_message(scope, "hi");
  _hydrate(scope);
};

export const _hydrate = (scope: ComponentScope) => {
  on(scope[Index.BUTTON], "click", bind(scope, _onclick));
};

const _onclick = (scope: ComponentScope) => {
  queue(scope, _apply_message, Priority.MESSAGE, "bye");
  queue(scope, _apply_show, Priority.SHOW, !scope[Index.SHOW]);
};

const _apply_show = (
  scope: ComponentScope,
  value: ComponentScope[Index.SHOW]
) => {
  if (write(scope, Index.SHOW, value)) {
    setConditionalRenderer(scope, Index.CONDITIONAL, value ? _if : undefined);
  }
};

const _apply_message = (
  scope: ComponentScope,
  value: ComponentScope[Index.MESSAGE]
) => {
  if (write(scope, Index.MESSAGE, value)) {
    queueInBranch(
      scope,
      Index.CONDITIONAL,
      _if,
      _apply_message2,
      Branch0Priority.MESSAGE,
      Priority.MESSAGE_SHOW
    );
  }
};

const _apply_message2 = (scope: Branch0Scope) => {
  data(scope[Branch0Index.TEXT], scope._[Index.MESSAGE]);
};

export default createRenderFn(template, walks, render);

const enum Branch0Index {
  TEXT = 0,
}

const enum Branch0Priority {
  MESSAGE = 0,
}

type Branch0Scope = Scope<{
  _: ComponentScope;
  [Branch0Index.TEXT]: Text;
}>;

const _if = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  (scope: Branch0Scope) => {
    queue(scope, _apply_message2, Branch0Priority.MESSAGE);
  }
);
