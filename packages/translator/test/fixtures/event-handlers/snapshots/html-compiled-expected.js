import _child from "./components/child/index.marko";
import { write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/event-handlers/template.marko", input => {
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