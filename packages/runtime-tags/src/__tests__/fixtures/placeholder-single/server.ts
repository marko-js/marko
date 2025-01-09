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
    placeholder: {
      content() {
        write("_A_");
      }
    }
  },
  );
  write("e");
  fork(resolveAfter("f", 1), write);
  write("g");
};

export default createTemplate("", renderer);
