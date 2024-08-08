import { createTemplate, tryCatch, write } from "@marko/runtime-tags/html";

const renderer = () => {
  write("a");
  tryCatch(
    () => {
      write("b");
      throw new Error("ERROR!");
    },
    (err) => {
      write((err as Error).message);
    },
  );
  write("d");
};

export default createTemplate(renderer);
