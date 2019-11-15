import { write } from "../../../../html";
import { serverRegister } from "../../../../common/server-registry";

export const input = { start: 10 };

// server renderer
export default (_input: typeof input) => {
  write("<body>");

  // put code here
  counter(_input);

  write("</body>");
};

const counter = serverRegister("counter", (_input: typeof input) => {
  const count = _input.start;
  write(`<div>${count}</div><button>increment</button>`);
});
