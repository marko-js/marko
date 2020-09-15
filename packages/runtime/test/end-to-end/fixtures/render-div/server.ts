import { write } from "../../../../html/index";
import { serverRegister } from "../../../../common/server-registry";

export const input = { start: 10 };

export default (_input: typeof input) => {
  write("<body>");
  counter(_input);
  write("</body>");
};

const counter = serverRegister("counter", (_input: typeof input) => {
  const count = _input.start;
  write(`<div>${count}</div><button>increment</button>`);
});
