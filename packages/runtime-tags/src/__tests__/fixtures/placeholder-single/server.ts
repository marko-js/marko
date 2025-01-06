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
    },
    () => {
      write("_A_");
    },
  );
  write("e");
  fork(resolveAfter("f", 1), write);
  write("g");
};

export default createTemplate("", renderer);
