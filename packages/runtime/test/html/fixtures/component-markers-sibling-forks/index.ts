import { write, fork } from "../../../../html/index";
import { resolveAfter } from "../../../utils/resolve";
import { serverRegister } from "../../../../common/server-registry";

const renderer = () => {
  firstComponent({});
  secondComponent({});
  thirdComponent({});
};

const firstComponent = serverRegister("first", () => {
  fork(resolveAfter("a", 3), write);
});

const secondComponent = serverRegister("second", () => {
  fork(resolveAfter("b", 2), write);
});

const thirdComponent = serverRegister("third", () => {
  fork(resolveAfter("c", 1), write);
});

export default renderer;
