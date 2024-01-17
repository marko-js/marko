import { createTemplate, write } from "@marko/runtime-tags/src/html";

const renderer = () => {
  firstComponent();
  secondComponent();
};

const firstComponent = () => {
  write("a");
  childComponent();
  write("d");
};

const childComponent = () => {
  write("b");
  write("c");
};

const secondComponent = () => {
  write("x");
  write("y");
  write("z");
};

export default createTemplate(renderer);
