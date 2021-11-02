import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("4qvqETgR", input => {
  _write("Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;");
});

export default _renderer;
export const render = _createRenderer(_renderer);