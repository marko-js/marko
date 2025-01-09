import {
  createTemplate,
  fork,
  tryContent,
  write,
} from "@marko/runtime-tags/html";

import { resolveAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  tryContent({
    content() {
      write("b");
      fork(resolveAfter("c", 2), write);
      write("d");
    },
    catch: {
      content() {
        write("ERROR!");
      }
    },
  });
  write("f");
  fork(resolveAfter("g", 1), write);
  write("h");
};

export default createTemplate("", renderer);
