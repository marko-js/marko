import {
  on,
  register,
  createRenderer,
  createRenderFn,
  setConditionalRenderer,
  data,
  queue,
  write,
  read,
  bind,
  readInOwner,
  queueInBranch,
} from "../../../dom/index";

import { get, next, over, open, close } from "../../utils/walks";

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

type scope = {
  [Index.BUTTON]: HTMLButtonElement;
  [Index.COMMENT]: Comment;
  [Index.CONDITIONAL]: Comment;
  [Index.SHOW]: boolean;
  [Index.MESSAGE]: string;
};

// <let/show = true/>
// <let/message = "hi"/>
// <button onclick() { message = "bye"; show = !show; }/>
// <if=show><span>${message}</span></if>

export const template = `<button></button><!>`;
export const walks = open(7) + get + over(1) + get + over(1) + close;
export const render = () => {
  _apply_show(true);
  _apply_message("hi");
  _hydrate();
};

export const _hydrate = register("", () => {
  on(Index.BUTTON, "click", bind(_onclick));
});

const _onclick = () => {
  queue(_apply_message, Priority.MESSAGE, "bye");
  queue(_apply_show, Priority.SHOW, !read<scope, Index.SHOW>(Index.SHOW));
};

const _apply_show = (value: scope[Index.SHOW]) => {
  if (write(Index.SHOW, value)) {
    setConditionalRenderer(Index.CONDITIONAL, value ? _if : undefined);
  }
};

const _apply_message = (value: scope[Index.MESSAGE]) => {
  if (write(Index.MESSAGE, value)) {
    queueInBranch(
      Index.CONDITIONAL,
      _if,
      _apply_message2,
      Branch0Priority.MESSAGE,
      Priority.MESSAGE_SHOW
    );
  }
};

const _apply_message2 = () => {
  data(Branch0Index.TEXT, readInOwner<scope, Index.MESSAGE>(Index.MESSAGE));
};

export default createRenderFn(template, walks, render, 0);

const enum Branch0Index {
  TEXT = 0,
}

const enum Branch0Priority {
  MESSAGE = 0,
}

// type Branch0Scope = [Text];

const _if = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  () => {
    queue(_apply_message2, Branch0Priority.MESSAGE);
  },
  0
);
