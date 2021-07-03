import {
  data,
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
import { get, next, open, close } from "../../utils/walks";

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
export const walks = open(3) + get + next(1) + get + next(1) + close;
export const hydrate = register("", () => {
  write(Index.CLICK_COUNT, 0);
  execClickCount();
});

const execClickCount = () => {
  if (isDirty(Index.CLICK_COUNT)) {
    on(
      Index.BUTTON,
      "click",
      read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT) <= 1
        ? bind(clickHandler)
        : false
    );
    data(Index.BUTTON_TEXT, read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT));
  }
};

const clickHandler = () => {
  writeQueued(
    Index.CLICK_COUNT,
    read<scope, Index.CLICK_COUNT>(Index.CLICK_COUNT) + 1
  );
  queue(execClickCount);
};

export default createRenderFn(template, walks, hydrate, 0);

ensureDelegated("click");
