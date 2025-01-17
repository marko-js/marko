import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const show = true;
  const count = 0;
  debugger;
  _$.write(`<button class=inc></button>${_$.markResumeNode(_scope0_id, "#button/0")}<button class=toggle></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<span>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/0")}</span>`);
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _$.markResumeCleanup(_scope1_id);
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _$.write(_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/2", _ifScopeId));
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "show": show,
    "count": count,
    "#text/2(": _ifRenderer,
    "#text/2!": _$.getScopeById(_ifScopeId)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);