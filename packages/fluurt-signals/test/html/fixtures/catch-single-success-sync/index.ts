import { tryCatch, write, fork } from "../../../../html/index";
import { resolveAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  tryCatch(
    () => {
      write("b");
    },
    () => {
      write("ERROR!");
    }
  );
  write("c");
};

export default renderer;
