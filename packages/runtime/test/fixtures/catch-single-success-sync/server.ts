import { tryCatch, write } from "../../../src/html/index";

const renderer = () => {
  write("a");
  tryCatch(
    () => {
      write("b");
    },
    () => {
      write("ERROR!");
    }
  );
  write("c");
};

export default renderer;
