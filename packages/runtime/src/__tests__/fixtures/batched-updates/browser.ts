import {
  on,
  data,
  createRenderFn,
  queue,
  bind,
  write,
  Scope,
} from "../../../dom/index";
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
  SUM_AB = 4,
}

type ComponentScope = Scope<{
  [Index.BUTTON]: HTMLButtonElement;
  [Index.TEXT]: Text;
  [Index.A]: number;
  [Index.B]: number;
  [Index.SUM_AB]: number;
}>;

// <let/a = 0/>
// <let/b = 0/>
// <button onclick() { a++; b++; }>${a + b}</button>

export const template = `<button> </button>`;
export const walks = open(4) + get + next(1) + get + next(1) + close;
export const render = (scope: ComponentScope) => {
  execA(scope, 0);
  execB(scope, 0);
  hydrate(scope);
};

export const hydrate = (scope: ComponentScope) => {
  on(scope, Index.BUTTON, "click", bind(scope, clickHandler));
};

const clickHandler = (scope: ComponentScope) => {
  queue(scope, execA, Index.A, scope[Index.A] + 1);
  queue(scope, execB, Index.B, scope[Index.B] + 1);
};

const execA = (scope: ComponentScope, value: number) => {
  if (write(scope, Index.A, value)) {
    queue(scope, execAB, Index.SUM_AB);
  }
};

const execB = (scope: ComponentScope, value: number) => {
  if (write(scope, Index.B, value)) {
    queue(scope, execAB, Index.SUM_AB);
  }
};

const execAB = (scope: ComponentScope) => {
  execSumAB(scope, scope[Index.A] + scope[Index.B]);
};

const execSumAB = (scope: ComponentScope, value: number) => {
  if (write(scope, Index.SUM_AB, value)) {
    data(scope, Index.TEXT, value);
  }
};

export default createRenderFn(template, walks, render, 0);
