import { write, fork, tryPlaceholder } from "../../../src/html/index";
import { resolveAfter } from "../../utils/resolve";

const renderer = () => {
  firstComponent({});
  secondComponent({});
};

const firstComponent = register("first", () => {
  write("a");
  tryPlaceholder(
    () => {
      write("b");
      fork(resolveAfter("c", 2), write);
      write("d");
    },
    () => {
      write("e...");
    }
  );
  write("e");
  fork(resolveAfter("f", 1), write);
  write("g");
});

const secondComponent = register("second", () => {
  write("v");
  tryPlaceholder(
    () => {
      write("w");
      fork(resolveAfter("x", 2), write);
      write("y");
    },
    () => {
      write("z...");
    }
  );
  write("z");
});

export default renderer;
