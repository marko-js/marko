import { write, fork, tryPlaceholder } from "../../../../src/html/index";
import { resolveAfter } from "../../../utils/resolve";
import { serverRegister } from "../../../../src/common/server-registry";

const renderer = () => {
  firstComponent({});
  secondComponent({});
};

const firstComponent = serverRegister("first", () => {
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

const secondComponent = serverRegister("second", () => {
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
