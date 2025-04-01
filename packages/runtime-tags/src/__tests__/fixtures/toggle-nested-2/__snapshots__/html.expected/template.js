import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _count_closures = new Set();
  let outer = true;
  let inner = true;
  let count = 0;
  _$.write(`<div><button id=outer></button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  _$.resumeConditional(() => {
    if (outer) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<button id=inner></button>${_$.markResumeNode(_scope1_id, "#button/0")}`);
      _$.resumeSingleNodeConditional(() => {
        if (inner) {
          const _scope2_id = _$.nextScopeId();
          _$.write(`<button id=count>${_$.escapeXML(count)}${_$.markResumeNode(_scope2_id, "#text/1")}</button>${_$.markResumeNode(_scope2_id, "#button/0")}`);
          _$.writeEffect(_scope2_id, "__tests__/template.marko_2_count");
          _$.writeSubscribe(_count_closures, _$.writeScope(_scope2_id, {
            _: _$.ensureScopeWithId(_scope1_id),
            "ClosureSignalIndex:count": 0
          }, "__tests__/template.marko", "8:6"));
          return 0;
        }
      }, _scope1_id, "#text/1", 1);
      _$.writeEffect(_scope1_id, "__tests__/template.marko_1_inner");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "6:4");
      return 0;
    }
  }, _scope0_id, "#text/1", 1);
  _$.write("</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_outer");
  _$.writeScope(_scope0_id, {
    outer,
    inner,
    count,
    "ClosureScopes:count": _count_closures
  }, "__tests__/template.marko", 0, {
    outer: "1:6",
    inner: "2:6",
    count: "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});