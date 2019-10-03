import { tryPlaceholder, write, fork } from "../../../../html/index";
import { resolveAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  tryPlaceholder(
    () => {
      write("b");
      fork(resolveAfter("c", 20), write);
      write("d");
      tryPlaceholder(
        () => {
          write("e");
          fork(resolveAfter("f", 30), write);
          write("g");
        },
        () => {
          write("h...");
        }
      );
    },
    () => {
      write("i...");
    }
  );
  write("j");
  fork(resolveAfter("k", 1), write);
  write("l");
};

export default renderer;
