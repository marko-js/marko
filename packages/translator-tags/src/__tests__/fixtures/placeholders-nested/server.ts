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
          write("h...");
        },
      );
    },
    () => {
      write("i...");
    },
  );
  write("j");
  fork(resolveAfter("k", 1), write);
  write("l");
};

export default createTemplate(renderer, "");
