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
  queueInBranch
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
  MESSAGE = 6
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
  execShow(true);
  execMessage("hi");
  hydrate();
};

export const hydrate = register("", () => {
  on(Index.BUTTON, "click", bind(clickHandler));
});

const clickHandler = () => {
  queue(execMessage, Index.MESSAGE, "bye");
  queue(execShow, Index.SHOW, !read<scope, Index.SHOW>(Index.SHOW));
};

const execShow = value => {
  if (write(Index.SHOW, value)) {
    setConditionalRenderer(Index.CONDITIONAL, value ? branch0 : undefined);
  }
};

const execMessage = value => {
  if (write(Index.MESSAGE, value)) {
    queueInBranch(
      Index.CONDITIONAL,
      branch0,
      execMessageBranch0,
      Branch0Index.CLOSURE_MESSAGE
    );
  }
};

const execMessageBranch0 = () => {
  data(Branch0Index.TEXT, readInOwner<scope, Index.MESSAGE>(Index.MESSAGE));
};

export default createRenderFn(template, walks, render, 0);

const enum Branch0Index {
  CLOSURE_MESSAGE = -1,
  TEXT = 0
}

// type Branch0Scope = [Text];

const branch0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  () => {
    queue(execMessageBranch0, Branch0Index.CLOSURE_MESSAGE);
  },
  0
);
