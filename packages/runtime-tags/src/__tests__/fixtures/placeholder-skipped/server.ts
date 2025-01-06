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
    },
    () => {
      write("_A_");
    },
  );
  write("c");
  fork(resolveAfter("d", 1), write);
  write("e");
};

export default createTemplate("", renderer);
