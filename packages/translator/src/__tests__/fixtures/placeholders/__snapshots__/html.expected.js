import { markScopeOffset as _markScopeOffset, escapeXML as _escapeXML, toString as _toString, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/placeholders/template.marko", input => {
  _write(`<div><div>a</div>${_markScopeOffset(0)}${_escapeXML(x)}Hello Text &lt;a/>${_markScopeOffset(1)}${_toString(x)}${_markScopeOffset(2)}Hello HTML <a/><script>
    Hello &lt;b> &lt;/script>
  </script></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);