import { write, wrapHydratable } from "../../../../src/html/index";

const renderer = () => {
  firstComponent({});
  secondComponent({});
};

const firstComponent = wrapHydratable("first", () => {
  write("a");
  childComponent();
  write("d");
});

const childComponent = () => {
  write("b");
  write("c");
};

const secondComponent = wrapHydratable("second", () => {
  write("x");
  write("y");
  write("z");
});

export default renderer;
