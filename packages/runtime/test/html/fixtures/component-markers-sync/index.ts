import { write } from "../../../../src/html/index";
import { serverRegister } from "../../../../src/common/server-registry";

const renderer = () => {
  firstComponent({});
  secondComponent({});
};

const firstComponent = serverRegister("first", () => {
  write("a");
  childComponent();
  write("d");
});

const childComponent = () => {
  write("b");
  write("c");
};

const secondComponent = serverRegister("second", () => {
  write("x");
  write("y");
  write("z");
});

export default renderer;
