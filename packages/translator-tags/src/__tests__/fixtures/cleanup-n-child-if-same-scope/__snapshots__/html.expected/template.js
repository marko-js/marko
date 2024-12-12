import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const show = true;
  const el = _$.nodeRef();
  _$.write(`<button>Toggle</button>${_$.markResumeNode(_scope0_id, "#button/0")}<pre></pre>${_$.markResumeNode(_scope0_id, "#pre/1")}`);
  let _ifScopeId, _ifRenderer;
  if (show) {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.markResumeScopeStart(_scope1_id)}<div>a</div><span>b</span><p>c</p>${_$.markResumeCleanup(_scope1_id)}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1");
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
    _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  }
  _$.write(_$.markResumeControlEnd(_scope0_id, "#text/2"));
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeScope(_scope0_id, {
    "show": show,
    "#text/2(": _ifRenderer,
    "#text/2!": _$.getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);