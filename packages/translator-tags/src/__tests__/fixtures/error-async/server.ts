import { createTemplate, fork, write } from "@marko/runtime-tags/html";
import { rejectAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  fork(rejectAfter(new Error("ERROR!"), 1), write);
  write("b");
};

export default createTemplate(renderer);
