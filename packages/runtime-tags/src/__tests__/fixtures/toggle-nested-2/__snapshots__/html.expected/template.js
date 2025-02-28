import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId2, _ifBranch2;
  const outer = true;
  const inner = true;
  const count = 0;
  _$.write(`<div><button id=outer></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.resumeConditional(() => {
    if (outer) {
      const _scope1_id = _$.nextScopeId();
      let _ifScopeId, _ifBranch;
      _$.write(`<button id=inner></button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
      _$.resumeSingleNodeConditional(() => {
        if (inner) {
          const _scope2_id = _$.nextScopeId();
          _$.write(`<button id=count>${_$.escapeXML(count)}${_$.markResumeNode(_scope2_id, "#text/1")}</button>${_$.markResumeNode(_scope2_id, "#button/0")}`);
          _$.writeEffect(_scope2_id, "__tests__/template.marko_2_count/subscriber");
          _$.writeEffect(_scope2_id, "__tests__/template.marko_2_count");
          _$.writeScope(_scope2_id, {
            _: _$.ensureScopeWithId(_scope1_id)
          }, "__tests__/template.marko", "8:6");
          _ifBranch = 0;
          _ifScopeId = _scope2_id;
        }
      }, _scope1_id, "#text/1");
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_inner");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id),
        "#text/1(": _ifBranch,
        "#text/1!": _$.getScopeById(_ifScopeId)
      }, "__tests__/template.marko", "6:4");
      _ifBranch2 = 0;
      _ifScopeId2 = _scope1_id;
    }
  }, _scope0_id, "#text/1");
  _$.write("</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_outer");
  _$.writeScope(_scope0_id, {
    outer,
    inner,
    count,
    "#text/1(": _ifBranch2,
    "#text/1!": _$.getScopeById(_ifScopeId2)
  }, "__tests__/template.marko", 0, {
    outer: "1:6",
    inner: "2:6",
    count: "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);