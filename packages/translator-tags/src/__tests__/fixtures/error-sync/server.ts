import { createTemplate, write } from "@marko/runtime-tags/html";

const renderer = () => {
  write("a");
  throw new Error("ERROR!");
};

export default createTemplate(renderer);
