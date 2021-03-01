import _child from "./components/child/index.marko";
import { hydrateMarker as _hydrateMarker, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/test/fixtures/event-handlers/template.marko", input => {
  _child({
    class: "hi",
    onclick: () => {
      console.log("hello world");
    }
  });

  _write(`${_hydrateMarker()}<div class=hi></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);