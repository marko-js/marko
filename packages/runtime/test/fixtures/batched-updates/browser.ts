import {
  on,
  data,
  register,
  createRenderFn,
  ensureDelegated,
  queue,
  bind,
  read,
  write
} from "../../../src/dom/index";
import { get, next, open, close } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const enum Index {
  BUTTON = 0,
  TEXT = 1,
  A = 2,
  B = 3,
  SUM_AB = 4
}

type scope = {
  [Index.BUTTON]: HTMLButtonElement;
  [Index.TEXT]: Text;
  [Index.A]: number;
  [Index.B]: number;
  [Index.SUM_AB]: number;
};

// <let/a = 0/>
// <let/b = 0/>
// <button onclick() { a++; b++; }>${a + b}</button>

export const template = `<button> </button>`;
export const walks = open(4) + get + next(1) + get + next(1) + close;
export const render = () => {
  execA(0);
  execB(0);
  hydrate();
};

export const hydrate = register("", () => {
  on(Index.BUTTON, "click", bind(clickHandler));
});

const clickHandler = () => {
  queue(execA, Index.A, read<scope, Index.A>(Index.A) + 1);
  queue(execB, Index.B, read<scope, Index.B>(Index.B) + 1);
};

const execA = (value: number) => {
  if (write(Index.A, value)) {
    queue(execAB, Index.SUM_AB);
  }
};

const execB = (value: number) => {
  if (write(Index.B, value)) {
    queue(execAB, Index.SUM_AB);
  }
};

const execAB = () => {
  execSumAB(read<scope, Index.A>(Index.A) + read<scope, Index.B>(Index.B));
};

const execSumAB = (value: number) => {
  if (write(Index.SUM_AB, value)) {
    data(Index.TEXT, value);
  }
};

export default createRenderFn(template, walks, render, 0);

ensureDelegated("click");
