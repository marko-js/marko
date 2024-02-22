import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, toString as _toString, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`${_escapeXML(input.x)}${_markResumeNode(_scope0_id, "#text/0")}<span>${_escapeXML(input.x)}${_markResumeNode(_scope0_id, "#text/1")}<div></div></span><div><div>a</div>${_escapeXML(input.x)}${_markResumeNode(_scope0_id, "#text/2")}Hello Text &lt;a/>${_toString(input.x)}${_markResumeNode(_scope0_id, "#text/3")}Hello HTML <a/><script>
    <!>Hello &lt;b> &lt;/script>
  </script></div>`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/placeholders/template.marko");