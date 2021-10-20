import { write } from "../../../src/html/index";

const renderer = () => {
  firstComponent({});
  secondComponent({});
};

const firstComponent = register("first", () => {
  write("a");
  childComponent();
  write("d");
});

const childComponent = () => {
  write("b");
  write("c");
};

const secondComponent = register("second", () => {
  write("x");
  write("y");
  write("z");
});

export default renderer;
