import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $x_closures = new Set();
  let x = 1;
  const MyTag = {
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<div>${_$.escapeXML(x)}${_$.markResumeNode($scope1_id, "#text/0")}</div>`);
      _$.writeSubscribe($x_closures, _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id),
        "ClosureSignalIndex:x": 0
      }, "__tests__/template.marko", "2:2"));
      _$.resumeClosestBranch($scope1_id);
    })
  };
  _$.dynamicTag($scope0_id, "#text/0", MyTag, {}, 0, 0, 1);
  _$.write(`<button>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x,
    "ClosureScopes:x": $x_closures
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});