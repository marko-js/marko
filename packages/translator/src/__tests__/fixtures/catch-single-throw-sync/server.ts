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
      throw new Error("ERROR!");
    },
    (err) => {
      write(err.message);
    }
  );
  write("d");
};

export default createTemplate(renderer);
