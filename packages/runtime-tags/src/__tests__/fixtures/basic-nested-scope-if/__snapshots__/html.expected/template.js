import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  const clickCount = 0;
  _$.write("<div>");
  _$.resumeSingleNodeConditional(() => {
    if (clickCount < 3) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<button>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope1_id, "#text/1")}</button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_clickCount");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "3:4");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    } else {
      const _scope2_id = _$.nextScopeId();
      _$.write(`<span>The button was clicked <!>${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope2_id, "#text/0")} times.</span>`);
      _$.writeScope(_scope2_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "8:4");
      _ifBranch = 1;
      _ifScopeId = _scope2_id;
    }
  }, _scope0_id, "#text/0");
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    clickCount,
    "#text/0(": _ifBranch,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    clickCount: "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);