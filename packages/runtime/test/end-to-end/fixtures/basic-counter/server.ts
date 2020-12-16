import { write, register, hydrateMarker } from "../../../../src/html";

export const input = { start: 10 };

export default (_input: typeof input) => {
  write("<body>");
  counter(_input);
  write("</body>");
};

const counter = register("counter", (_input: typeof input) => {
  const count = _input.start;
  write(
    `<div>${hydrateMarker()}${count}</div>${hydrateMarker()}<button>increment</button>`
  );
});
