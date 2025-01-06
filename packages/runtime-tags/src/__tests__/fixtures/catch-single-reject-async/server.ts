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
      write("c");
    },
    (err) => {
      write((err as Error).message);
    },
  );
  write("d");
  fork(resolveAfter("e", 1), write);
  write("f");
};

export default createTemplate("", renderer);
