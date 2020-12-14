import _child from "./components/child/index.marko";
import { write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  _child({
    class: "hi",
    onclick: () => {
      console.log("hello world");
    }
  });

  _write("<div class=hi></div>");
});

export default _renderer;
export const render = _createRenderFn(_renderer);