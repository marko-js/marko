import {
  fork,
  getInContext,
  popContext,
  pushContext,
  tryPlaceholder,
  write,
} from "@marko/runtime-fluurt/src/html";
import { resolveAfter } from "../../utils/resolve";

const k = "KEY";
const renderer = () => {
  write("a");
  pushContext(k, "2");
  tryPlaceholder(
    () => {
      write("b");
      fork(resolveAfter("c", 2), (r) => {
        const v = getInContext(k) as string;
        write(r + v);
      });
      write("d");
    },
    () => {
      write("e...");
    }
  );
  write("f");
  fork(resolveAfter("g", 1), write);
  write("h");
  popContext();
  try {
    getInContext(k);
  } catch (err) {
    write("\ncontext cleared");
  }
};

export default renderer;
