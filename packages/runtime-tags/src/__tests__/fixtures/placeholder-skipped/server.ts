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
    },
    placeholder: {
      content() {
        write("_A_");
      }
    }
  },
  );
  write("c");
  fork(resolveAfter("d", 1), write);
  write("e");
};

export default createTemplate("", renderer);
