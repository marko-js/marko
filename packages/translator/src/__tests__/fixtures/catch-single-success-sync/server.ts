import {
  createTemplate,
  tryCatch,
  write,
} from "@marko/runtime-fluurt/src/html";

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

export default createTemplate(renderer);
