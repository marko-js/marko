import {
  data,
  loop,
  computeLoopFromTo,
  source,
  destructureSources,
  setSource,
  createRenderer,
  createRenderFn,
  Scope,
} from "../../../dom/index";
import { next, get } from "../../utils/walks";


export const inputs = [
  {
    from: 0,
    to: 3,
    step: 1,
  },
  {
    from: 0,
    to: -1,
    step: 1,
  },
  {
    from: 0,
    to: 3,
    step: 1,
  },
];

type Input = typeof inputs[number];

const enum INDEX {
  div = 0,
  loop = 0,
  from = 7,
  to = 10,
  step = 13,
}

type ComponentScope = Scope<{
  [INDEX.div]: HTMLDivElement;
  [INDEX.loop]: HTMLDivElement;
  [INDEX.from]: Input["from"];
  [INDEX.to]: Input["to"];
  [INDEX.step]: Input["step"];
}>;

const enum INDEX_FOR0 {
  textNode = 0,
  n = 1,
}

type For0Scope = Scope<{
  _: ComponentScope;
  [INDEX_FOR0.textNode]: Text;
  [INDEX_FOR0.n]: number;
}>;


// <attrs/{ from, to, step }/>
// <div>
//   <for|n| from=input.from to=input.to step=input.step>
//     ${n}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = get + next(1);

const n$forBody0 = source(INDEX_FOR0.n, [], (scope: For0Scope, n: For0Scope[INDEX_FOR0.n]) => {
  data(scope[INDEX_FOR0.textNode], n);
});

const forBody0 = createRenderer(" ", get + next(1));

const for0 = loop(
  INDEX.loop, 
  3, 
  forBody0,
  [n$forBody0],
  (scope: For0Scope, [n]) => setSource(scope, n$forBody0, n),
  (scope: ComponentScope) => computeLoopFromTo(scope[INDEX.from], scope[INDEX.to], scope[INDEX.step])
);

export const from_subscribers = [
  for0
]

export const to_subscribers = [
  for0
]

export const step_subscribers = [
  for0
]

const _from = source(INDEX.from, from_subscribers);
const _to = source(INDEX.to, to_subscribers);
const _step = source(INDEX.step, step_subscribers);

export const attrs = destructureSources([_from, _to, _step], (scope: ComponentScope, { from, to, step }: Input) => {
  setSource(scope, _from, from);
  setSource(scope, _to, to);
  setSource(scope, _step, step);
});

export default createRenderFn(template, walks, undefined, attrs);
