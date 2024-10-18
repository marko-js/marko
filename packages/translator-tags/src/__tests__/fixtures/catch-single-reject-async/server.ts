import {
  createTemplate,
  fork,
  tryCatch,
  write,
} from "@marko/runtime-tags/html";

import { rejectAfter, resolveAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  tryCatch(
    () => {
      write("b");
      fork(rejectAfter(new Error("ERROR!"), 2), write);
      write("d");
    },
    (err) => {
      write((err as Error).message);
    },
  );
  write("e");
  fork(resolveAfter("f", 1), write);
  write("g");
};

export default createTemplate(renderer, "");
