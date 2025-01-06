import {
  createTemplate,
  fork,
  tryPlaceholder,
  write,
} from "@marko/runtime-tags/html";

import { resolveAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  tryPlaceholder(
    () => {
      write("b");
      fork(resolveAfter("c", 2), write);
      write("d");
      tryPlaceholder(
        () => {
          write("e");
          fork(resolveAfter("f", 3), write);
          write("g");
        },
        () => {
          write("_A_");
        },
      );
    },
    () => {
      write("_B_");
    },
  );
  write("h");
  fork(resolveAfter("i", 1), write);
  write("j");
};

export default createTemplate("", renderer);
