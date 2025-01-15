import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write(`<button id=tags>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}<div>`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagArgs(_dynamicScope, input.content, [count, "hello"]);
  _$.write(`${_$.markResumeControlEnd(_scope0_id, "#text/2")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/components/tags-layout.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count,
    "#text/2!": _$.writeExistingScope(_dynamicScope),
    "#text/2(": _$.normalizeDynamicRenderer(input.content)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/components/tags-layout.marko", _renderer);