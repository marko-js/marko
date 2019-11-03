import { tryCatch, write, fork } from "../../../../html/index";

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
