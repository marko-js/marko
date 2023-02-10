import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, toString as _toString, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`${_escapeXML(input.x)}${_markHydrateNode(_scope0_id, "#text/0")}<span>${_escapeXML(input.x)}${_markHydrateNode(_scope0_id, "#text/1")}<div></div></span><div><div>a</div>${_escapeXML(input.x)}${_markHydrateNode(_scope0_id, "#text/2")}Hello Text &lt;a/>${_toString(input.x)}${_markHydrateNode(_scope0_id, "#text/3")}Hello HTML <a/><script>
    <!>Hello &lt;b> &lt;/script>
  </script></div>`);
}, "packages/translator/src/__tests__/fixtures/placeholders/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);