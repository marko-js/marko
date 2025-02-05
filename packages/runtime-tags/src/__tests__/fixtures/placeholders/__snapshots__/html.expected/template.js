import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<!>${_$.escapeXML(input.x)}${_$.markResumeNode(_scope0_id, "#text/0")}<span>${_$.escapeXML(input.x)}${_$.markResumeNode(_scope0_id, "#text/1")}<div></div></span><div><div>a</div>${_$.escapeXML(input.x)}${_$.markResumeNode(_scope0_id, "#text/2")}Hello Text &lt;a/><!>${_$.toString(input.x)}${_$.markResumeNode(_scope0_id, "#text/3")}Hello HTML <span>hi</span><script>
    ${_$.escapeScript("'Hello <b> </script>'")}
  </script>${_$.markResumeNode(_scope0_id, "#script/5")}<style>
    ${_$.escapeStyle(".test { content: 'Hello <b> </style>' }")}
  </style>${_$.markResumeNode(_scope0_id, "#style/6")}</div>`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);