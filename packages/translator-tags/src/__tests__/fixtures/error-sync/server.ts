import { createTemplate, write } from "@marko/runtime-tags/src/html";

const renderer = () => {
  write("a");
  throw new Error("ERROR!");
};

export default createTemplate(renderer);
