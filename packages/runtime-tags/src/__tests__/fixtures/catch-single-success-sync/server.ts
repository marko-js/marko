import { createTemplate, tryContent, write } from "@marko/runtime-tags/html";

const renderer = () => {
  write("a");
  tryContent({
    content() {
      write("b");
    },
    catch: {
      content() {
        write("ERROR!");
      }
    },
  });
  write("c");
};

export default createTemplate("", renderer);
