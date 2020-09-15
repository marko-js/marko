import { write, fork } from "../../../../html/index";
import { resolveAfter } from "../../../utils/resolve";

const renderer = () => {
  write("a");
  fork(resolveAfter("b", 1), result1 => {
    write(result1);
    fork(resolveAfter("c", 1), result2 => {
      write(result2);
      fork(resolveAfter("d", 1), write);
      write("e");
    });
    write("f");
  });
  write("g");
  fork(resolveAfter("h", 1), result7 => {
    write(result7);
    fork(resolveAfter("i", 1), result8 => {
      write(result8);
      fork(resolveAfter("j", 1), write);
      write("k");
    });
    write("l");
  });
};

export default renderer;
