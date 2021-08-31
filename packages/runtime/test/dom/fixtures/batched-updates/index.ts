import {
  on,
  data,
  register,
  createRenderFn,
  ensureDelegated,
  queue,
  bind,
  read,
  write,
  isDirty
} from "../../../../src/dom/index";
import { currentScope } from "../../../../src/dom/scope";
import { get, next, open, close } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const enum Index {
  BUTTON = 0,
  TEXT = 1,
  A = 2,
  B = 3
}

type scope = {
  [Index.BUTTON]: HTMLButtonElement;
  [Index.TEXT]: Text;
  [Index.A]: number;
  [Index.B]: number;
};

// <let/a = 0/>
// <let/b = 0/>
// <button onclick() { a++; b++; }>${a + b}</button>

export const template = `<button> </button>`;
export const walks = open(4) + get + next(1) + get + next(1) + close;
export const render = () => {
  write(Index.A, 0);
  write(Index.B, 0);
  execAB();
  hydrate();
};

export const hydrate = register("", () => {
  on(Index.BUTTON, "click", bind(clickHandler));
});

const clickHandler = () => {
  write(Index.A, read<scope, Index.A>(Index.A) + 1);
  write(Index.B, read<scope, Index.B>(Index.B) + 1);
  queue(execAB);
};

const execAB = () => {
  if (isDirty(Index.A) || isDirty(Index.B)) {
    data(
      Index.TEXT,
      read<scope, Index.A>(Index.A) + read<scope, Index.B>(Index.B)
    );
  }
};

export default createRenderFn(template, walks, render, 0);

ensureDelegated("click");
