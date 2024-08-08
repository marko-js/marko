import {
  createTemplate,
  fork,
  tryCatch,
  write,
} from "@marko/runtime-tags/html";

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
    },
  );
  write("f");
  fork(resolveAfter("g", 1), write);
  write("h");
};

export default createTemplate(renderer);
