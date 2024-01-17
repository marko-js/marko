import {
  createTemplate,
  fork,
  tryPlaceholder,
  write,
} from "@marko/runtime-fluurt/src/html";
import { resolveAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  tryPlaceholder(
    () => {
      write("b");
    },
    () => {
      write("c...");
    },
  );
  write("d");
  fork(resolveAfter("e", 1), write);
  write("f");
};

export default createTemplate(renderer);
