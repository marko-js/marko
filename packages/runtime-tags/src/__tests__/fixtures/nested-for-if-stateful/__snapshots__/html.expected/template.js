import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _counts_closures = new Set();
  let counts = [0, 0, 0];
  _$.resumeSingleNodeForOf(counts, (count, i) => {
    const _scope1_id = _$.nextScopeId();
    let editing = false;
    _$.resumeSingleNodeConditional(() => {
      if (editing) {
        const _scope2_id = _$.nextScopeId();
        _$.write(`<button>Confirm <!>${_$.escapeXML(count + 1)}${_$.markResumeNode(_scope2_id, "#text/1")}</button>${_$.markResumeNode(_scope2_id, "#button/0")}`);
        _$.writeEffect(_scope2_id, "__tests__/template.marko_2_counts_count_i");
        _$.writeSubscribe(_counts_closures, _$.writeScope(_scope2_id, {
          _: _$.ensureScopeWithId(_scope1_id),
          "ClosureSignalIndex:counts": 0
        }, "__tests__/template.marko", "4:4"));
        return 0;
      } else {
        const _scope3_id = _$.nextScopeId();
        _$.write(`<button>Increment <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope3_id, "#text/1")}</button>${_$.markResumeNode(_scope3_id, "#button/0")}`);
        _$.writeEffect(_scope3_id, "__tests__/template.marko_3");
        _$.writeScope(_scope3_id, {
          _: _$.ensureScopeWithId(_scope1_id)
        }, "__tests__/template.marko", "12:4");
        return 1;
      }
    }, _scope1_id, "#text/0", 1);
    _$.writeScope(_scope1_id, {
      count,
      i,
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "2:2", {
      count: "2:6",
      i: "2:13"
    });
  }, 0, _scope0_id, "#text/0");
  _$.writeScope(_scope0_id, {
    counts,
    "ClosureScopes:counts": _counts_closures
  }, "__tests__/template.marko", 0, {
    counts: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});