import {
  createTemplate,
  fork,
  tryContent,
  write,
} from "@marko/runtime-tags/html";

import { resolveAfter } from "../../utils/resolve";

const renderer = () => {
  firstComponent();
  secondComponent();
};

const firstComponent = () => {
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
    },
  });
  write("e");
  fork(resolveAfter("f", 1), write);
  write("g");
};

const secondComponent = () => {
  write("1");
  tryContent({
    content() {
      write("2");
      fork(resolveAfter("3", 2), write);
      write("4");
    },
    placeholder: {
      content() {
        write("_B_");
      }
    },
  });
  write("5");
};

export default createTemplate("", renderer);
