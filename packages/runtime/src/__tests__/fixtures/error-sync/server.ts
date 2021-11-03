import { write } from "../../../html/index";

const renderer = () => {
  write("a");
  throw new Error("ERROR!");
};

export default renderer;
