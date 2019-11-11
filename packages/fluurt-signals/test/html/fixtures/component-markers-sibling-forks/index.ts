import { write, fork } from "../../../../html/index";
import { resolveAfter } from "../../../utils/resolve";
import { serverRegister } from "../../../../common/server-registry";

const renderer = () => {
  firstComponent("");
  secondComponent("");
  thirdComponent("");
};

const firstComponent = serverRegister(__dirname.split("/").pop()!, () => {
  fork(resolveAfter("a", 3), write);
});

const secondComponent = serverRegister(__dirname.split("/").pop()!, () => {
  fork(resolveAfter("b", 2), write);
});

const thirdComponent = serverRegister(__dirname.split("/").pop()!, () => {
  fork(resolveAfter("c", 1), write);
});

export default renderer;
