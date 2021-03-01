import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, hydrateMarker as _hydrateMarker, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _other from "./components/other.marko";

const _renderer = _register("packages/translator/test/fixtures/context-tag-from-tag-name/template.marko", input => {
  _other({
    renderBody() {
      _write("<span>");

      const message = _getInContext("packages/translator/test/fixtures/context-tag-from-tag-name/components/other.marko");

      _write(`${_hydrateMarker()}${_escapeXML(message)}</span>`);
    }

  });
});

export default _renderer;
export const render = _createRenderer(_renderer);