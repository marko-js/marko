import {
  data,
  walk,
  register,
  createRenderFn,
  Scope,
  on,
  ensureDelegated,
  setQueued,
  queue,
  checkDirty
} from "../../../../src/dom/index";
import { get, next } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click, click, click] as const;

// <let/clickCount = 0/>
// <button onclick() { clickCount++; }>${clickCount}</button>
export const template = `<button> </button>`;
export const walks = get + next(1) + get + next(1);
export const hydrate = register("", (scope: Scope, offset: number) => {
  scope[offset] = 0;
  scope[offset + 1] = walk();
  scope[offset + 2] = walk();
  execClickCount(scope, offset);
});

const execClickCount = (scope: Scope, offset: number) => {
  if (checkDirty(scope, offset)) {
    // TODO: the `scope` being closed over by this function will not
    // always be the root scope.  How do we handle this and other
    // function closures?
    on(
      scope[offset + 1] as Element,
      "click",
      scope[offset] <= 1
        ? () => {
            setQueued(scope, offset, (scope[offset] as number) + 1);
            queue(execClickCount, scope, offset);
          }
        : false
    );
    data(scope[offset + 2] as Text, scope[offset]);
  }
};

export default createRenderFn(template, walks, hydrate, 0);

ensureDelegated("click");

/*
<let/foo = 0/>
<const/computed = input.compute(foo)/>
<div>${computed}</div>


////


<let/bar = 0/>
<child compute(foo) { return foo + bar; }/>

/////

scope[computeFn] = (foo) => foo + getQueuedScope(scope)[bar];
*/
