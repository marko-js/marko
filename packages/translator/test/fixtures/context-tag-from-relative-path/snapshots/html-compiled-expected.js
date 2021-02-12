import Other from "./other.marko";
import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, hydrateMarker as _hydrateMarker, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/test/fixtures/context-tag-from-relative-path/template.marko", input => {
  Other({
    renderBody() {
      _write("<span>");

      const message = _getInContext("packages/translator/test/fixtures/context-tag-from-relative-path/other.marko");

      _write(`${_hydrateMarker()}${_escapeXML(message)}</span>`);
    }

  });
});

export default _renderer;
export const render = _createRenderer(_renderer);