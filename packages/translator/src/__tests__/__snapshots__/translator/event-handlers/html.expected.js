import _child from "./components/child/index.marko";
import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("zgeYPhda", input => {
  _child({
    class: "hi",
    onclick: () => {
      console.log("hello world");
    }
  });

  _write("<div class=hi></div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);