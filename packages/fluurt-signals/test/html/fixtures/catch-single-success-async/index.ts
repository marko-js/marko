import { tryCatch, write, fork } from "../../../../html/index";
import { resolveAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  tryCatch(
    () => {
      write("b");
      fork(resolveAfter("c", 2), write);
      write("d");
    },
    () => {
      write("ERROR!");
    }
  );
  write("f");
  fork(resolveAfter("g", 1), write);
  write("h");
};

export default renderer;
