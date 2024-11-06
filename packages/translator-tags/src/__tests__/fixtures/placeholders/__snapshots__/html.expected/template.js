import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<!>${_$.escapeXML(input.x)}${_$.markResumeNode(_scope0_id, "#text/0")}<span>${_$.escapeXML(input.x)}${_$.markResumeNode(_scope0_id, "#text/1")}<div></div></span><div><div>a</div>${_$.escapeXML(input.x)}${_$.markResumeNode(_scope0_id, "#text/2")}Hello Text &lt;a/><!>${_$.toString(input.x)}${_$.markResumeNode(_scope0_id, "#text/3")}Hello HTML <a/><script>
    Hello &lt;b> &lt;/script>
  </script></div>`);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/placeholders/template.marko", _renderer);