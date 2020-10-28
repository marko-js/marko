import { write } from "../../../../src/html/index";

const renderer = () => {
  write("a");
  throw new Error("ERROR!");
  write("b");
};

export default renderer;
