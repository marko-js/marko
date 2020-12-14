import { write, fork, wrapHydratable } from "../../../../src/html/index";
import { resolveAfter } from "../../../utils/resolve";

const renderer = () => {
  firstComponent({});
  secondComponent({});
  thirdComponent({});
};

const firstComponent = wrapHydratable("first", () => {
  fork(resolveAfter("a", 3), write);
});

const secondComponent = wrapHydratable("second", () => {
  fork(resolveAfter("b", 2), write);
});

const thirdComponent = wrapHydratable("third", () => {
  fork(resolveAfter("c", 1), write);
});

export default renderer;
