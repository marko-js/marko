import { tryPlaceholder, write, fork } from "../../../../html/index";
import { resolveAfter } from "../../../utils/resolve";

const renderer = () => {
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
  write("f");
  fork(resolveAfter("g", 1), write);
  write("h");
};

export default renderer;
