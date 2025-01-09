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
      tryContent({
        content() {
          write("e");
          fork(resolveAfter("f", 3), write);
          write("g");
        },
        placeholder: {
          content() {
            write("_A_");
          }
        }
      },
      );
    },
    placeholder: {
      content() {
        write("_B_");
      }
    }
  },
  );
  write("h");
  fork(resolveAfter("i", 1), write);
  write("j");
};

export default createTemplate("", renderer);
