import { createTemplate, tryContent, write } from "@marko/runtime-tags/html";

const renderer = () => {
  write("a");
  tryContent({
    content() {
      write("b");
      throw new Error("ERROR!");
    },
    catch: {
      content(err) {
        write((err as Error).message);
      }
    },
  });
  write("d");
};

export default createTemplate("", renderer);
