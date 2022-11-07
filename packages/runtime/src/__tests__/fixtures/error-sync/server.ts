import { write } from "@marko/runtime-fluurt/src/html";

const renderer = () => {
  write("a");
  throw new Error("ERROR!");
};

export default renderer;
