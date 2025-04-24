import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $count_closures = new Set();
  let outer = true;
  let inner = true;
  let count = 0;
  _$.write(`<div><button id=outer></button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.resumeConditional(() => {
    if (outer) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<button id=inner></button>${_$.markResumeNode($scope1_id, "#button/0")}`);
      _$.resumeConditional(() => {
        if (inner) {
          const $scope2_id = _$.nextScopeId();
          _$.write(`<button id=count>${_$.escapeXML(count)}${_$.markResumeNode($scope2_id, "#text/1")}</button>${_$.markResumeNode($scope2_id, "#button/0")}`);
          _$.writeEffect($scope2_id, "__tests__/template.marko_2_count");
          _$.writeSubscribe($count_closures, _$.writeScope($scope2_id, {
            _: _$.ensureScopeWithId($scope1_id),
            "ClosureSignalIndex:count": 0
          }, "__tests__/template.marko", "8:6"));
          return 0;
        }
      }, $scope1_id, "#text/1", 1, /* state: inner */1, 0, 1);
      _$.writeEffect($scope1_id, "__tests__/template.marko_1_inner");
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "6:4");
      return 0;
    }
  }, $scope0_id, "#text/1");
  _$.write(" hello</div>");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_outer");
  _$.writeScope($scope0_id, {
    outer,
    inner,
    count,
    "ClosureScopes:count": $count_closures
  }, "__tests__/template.marko", 0, {
    outer: "1:6",
    inner: "2:6",
    count: "3:6"
  });
  _$.resumeClosestBranch($scope0_id);
});