import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $counts_closures = new Set();
  let counts = [0, 0, 0];
  _$.resumeForOf(counts, (count, i) => {
    const $scope1_id = _$.nextScopeId();
    let editing = false;
    _$.resumeSingleNodeConditional(() => {
      if (editing) {
        const $scope2_id = _$.nextScopeId();
        _$.write(`<button>Confirm <!>${_$.escapeXML(count + 1)}${_$.markResumeNode($scope2_id, "#text/1")}</button>${_$.markResumeNode($scope2_id, "#button/0")}`);
        _$.writeEffect($scope2_id, "__tests__/template.marko_2_counts_count_i");
        _$.writeSubscribe($counts_closures, _$.writeScope($scope2_id, {
          _: _$.ensureScopeWithId($scope1_id),
          "ClosureSignalIndex:counts": 0
        }, "__tests__/template.marko", "4:4"));
        return 0;
      } else {
        const $scope3_id = _$.nextScopeId();
        _$.write(`<button>Increment <!>${_$.escapeXML(count)}${_$.markResumeNode($scope3_id, "#text/1")}</button>${_$.markResumeNode($scope3_id, "#button/0")}`);
        _$.writeEffect($scope3_id, "__tests__/template.marko_3");
        _$.writeScope($scope3_id, {
          _: _$.ensureScopeWithId($scope1_id)
        }, "__tests__/template.marko", "12:4");
        return 1;
      }
    }, $scope1_id, "#text/0");
    _$.writeScope($scope1_id, {
      count,
      i,
      _: _$.ensureScopeWithId($scope0_id)
    }, "__tests__/template.marko", "2:2", {
      count: "2:6",
      i: "2:13"
    });
  }, 0, $scope0_id, "#text/0", 1);
  _$.writeScope($scope0_id, {
    counts,
    "ClosureScopes:counts": $counts_closures
  }, "__tests__/template.marko", 0, {
    counts: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});