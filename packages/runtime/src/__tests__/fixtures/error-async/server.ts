import { write, fork } from "../../../html/index";
import { rejectAfter } from "../../utils/resolve";

const renderer = () => {
  write("a");
  fork(rejectAfter(new Error("ERROR!"), 1), write);
  write("b");
};

export default renderer;
