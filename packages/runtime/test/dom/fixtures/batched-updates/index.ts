import {
  on,
  walk,
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
import { get, next } from "../../utils/walks";

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
export const walks = get + next(1) + get + next(1);
export const hydrate = register("", () => {
  write(Index.A, 0);
  write(Index.B, 0);
  on(
    walk() as HTMLButtonElement,
    "click",
    bind(() => {
      write(Index.A, read<scope, Index.A>(Index.A) + 1);
      write(Index.B, read<scope, Index.B>(Index.B) + 1);
      queue(execAB);
    })
  );
  write(Index.TEXT, walk());

  execAB();
});

const execAB = () => {
  if (isDirty(Index.A) || isDirty(Index.B)) {
    data(
      Index.TEXT,
      read<scope, Index.A>(Index.A) + read<scope, Index.B>(Index.B)
    );
  }
};

export default createRenderFn(template, walks, hydrate, 0);

ensureDelegated("click");
