import { createTemplate, write } from "@marko/runtime-fluurt/src/html";

const renderer = () => {
  write("a");
  throw new Error("ERROR!");
};

export default createTemplate(renderer);
