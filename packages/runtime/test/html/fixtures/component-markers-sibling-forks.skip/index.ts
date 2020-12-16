import { write, fork, register } from "../../../../src/html/index";
import { resolveAfter } from "../../../utils/resolve";

const renderer = () => {
  firstComponent({});
  secondComponent({});
  thirdComponent({});
};

const firstComponent = register("first", () => {
  fork(resolveAfter("a", 3), write);
});

const secondComponent = register("second", () => {
  fork(resolveAfter("b", 2), write);
});

const thirdComponent = register("third", () => {
  fork(resolveAfter("c", 1), write);
});

export default renderer;
