import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const show = true;
  _$.write("<div>");
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _$.nextScopeId();
    _$.write("Hello!");
    _$.writeScope(_scope1_id, {});
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/1")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    "show": show,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);