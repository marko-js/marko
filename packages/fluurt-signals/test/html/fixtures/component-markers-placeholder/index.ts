import { write, fork, tryPlaceholder } from "../../../../html/index";
import { resolveAfter } from "../../../utils/resolve";
import { serverRegister } from "../../../../common/server-registry";

const renderer = () => {
  firstComponent("");
  secondComponent("");
};

const firstComponent = serverRegister(__dirname.split("/").pop()!, () => {
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

const secondComponent = serverRegister(__dirname.split("/").pop()!, () => {
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
