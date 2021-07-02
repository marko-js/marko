import {
  data,
  walk,
  register,
  createRenderFn,
  on,
  read,
  writeQueued,
  ensureDelegated,
  queue,
  isDirty,
  write,
  bind
} from "../../../../src/dom/index";
import { get, next } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click, click, click] as const;

const enum Index {
  BUTTON = 0,
  BUTTON_TEXT = 1,
  CLICK_COUNT = 2
}

type scope = {
  [Index.BUTTON]: HTMLButtonElement;
  [Index.BUTTON_TEXT]: Text;
  [Index.CLICK_COUNT]: number;
};

// <let/clickCount = 0/>
// <button onclick() { clickCount++; }>${clickCount}</button>

export const template = `<button> </button>`;
export const walks = get + next(1) + get + next(1);
export const hydrate = register("", () => {
  write(Index.CLICK_COUNT, 0);
  write(Index.BUTTON, walk());
  write(Index.BUTTON_TEXT, walk());
  execClickCount();
});

const execClickCount = () => {
  if (isDirty(Index.CLICK_COUNT)) {
    // TODO: the `scope` being closed over by this function will not
    // always be the root scope.  How do we handle this and other
    // function closures?
    on(
      read<scope, Index.BUTTON>(Index.BUTTON),
      "click",
      read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT) <= 1
        ? bind(() => {
            writeQueued(
              Index.CLICK_COUNT,
              read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT) + 1
            );
            queue(execClickCount);
          })
        : false
    );
    data(Index.BUTTON_TEXT, read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT));
  }
};

export default createRenderFn(template, walks, hydrate, 0);

ensureDelegated("click");
