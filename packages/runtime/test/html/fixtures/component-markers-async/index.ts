import { write, fork, wrapHydratable } from "../../../../src/html/index";
import { resolveAfter } from "../../../utils/resolve";

const renderer = () => {
  firstComponent({});
  secondComponent({});
};

const firstComponent = wrapHydratable("first", () => {
  write("x");
  write("y");
  write("z");
});

const secondComponent = wrapHydratable("second", () => {
  write("a");
  fork(resolveAfter("b", 1), write);
  fork(resolveAfter("c", 2), write);
});

export default renderer;
