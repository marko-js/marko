import { write, fork, register } from "../../../../src/html/index";
import { resolveAfter } from "../../../utils/resolve";

const renderer = () => {
  firstComponent({});
  secondComponent({});
};

const firstComponent = register("first", () => {
  write("x");
  write("y");
  write("z");
});

const secondComponent = register("second", () => {
  write("a");
  fork(resolveAfter("b", 1), write);
  fork(resolveAfter("c", 2), write);
});

export default renderer;
