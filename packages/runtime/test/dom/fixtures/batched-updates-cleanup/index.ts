import {
  on,
  register,
  createRenderer,
  createRenderFn,
  setConditionalRenderer,
  data,
  queue,
  ensureDelegated,
  write,
  read,
  bind,
  isDirty,
  readInOwner,
  runInBranch
} from "../../../../src/dom/index";

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
  write(Index.SHOW, true);
  write(Index.MESSAGE, "hi");
  execShowMessage();
  hydrate();
};

export const hydrate = register("", () => {
  on(Index.BUTTON, "click", bind(clickHandler));
});

const clickHandler = () => {
  write(Index.MESSAGE, "bye");
  write(Index.SHOW, !read(Index.SHOW));
  queue(execShowMessage);
};

const execShowMessage = () => {
  if (isDirty(Index.SHOW)) {
    setConditionalRenderer(
      Index.CONDITIONAL,
      read(Index.SHOW) ? branch0 : undefined
    );
  }
  if (isDirty(Index.MESSAGE)) {
    runInBranch(Index.CONDITIONAL, branch0, execMessageBranch0);
  }
};

const execMessageBranch0 = () => {
  data(Branch0Index.TEXT, readInOwner(Index.MESSAGE));
};

export default createRenderFn(template, walks, render, 0);

ensureDelegated("click");

const enum Branch0Index {
  TEXT = 0
}

type Branch0Scope = [Text];

const branch0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  undefined,
  0
);
