import {
  on,
  data,
  createRenderFn,
  source,
  derivation,
  queueHydrate,
  bind,
  Scope,
} from "../../../dom/index";
import { get, next } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

const enum Index {
  BUTTON = 0,
  TEXT = 1,
  A = 2,
  A_MARK = 3,
  A_STALE = 4,
  B = 5,
  B_MARK = 6,
  B_STALE = 7,
  SUM_AB = 8,
  SUM_AB_MARK = 9,
  SUM_AB_STALE = 10
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
export const walks = get + next(1) + get + next(1);
export const setup = (scope: ComponentScope) => {
  setA(scope, 0);
  setB(scope, 0);
  queueHydrate(scope, hydrate);
};

export const hydrate = (scope: ComponentScope) => {
  on(scope[Index.BUTTON], "click", bind(scope, clickHandler));
};

const clickHandler = (scope: ComponentScope) => {
  queueA(scope, scope[Index.A] + 1);
  queueB(scope, scope[Index.B] + 1);
};

const sumAB = derivation(Index.SUM_AB, 2, [], (scope: ComponentScope) => scope[Index.A] + scope[Index.B], (scope: ComponentScope, value: number) => {
  data(scope[Index.TEXT], value);
});
const [setA, queueA] = source(Index.A, 1, [sumAB]);
const [setB, queueB] = source(Index.B, 1, [sumAB]);

export default createRenderFn(template, walks, setup);
