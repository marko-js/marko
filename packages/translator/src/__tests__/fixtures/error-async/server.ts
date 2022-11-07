import { write, fork } from "@marko/runtime-fluurt/src/html";
import { rejectAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  fork(rejectAfter(new Error("ERROR!"), 1), write);
  write("b");
};

export default renderer;
