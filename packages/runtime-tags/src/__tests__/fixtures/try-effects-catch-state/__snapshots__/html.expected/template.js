import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $clickCount_closures = new Set();
  let clickCount = 0;
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
  _$.tryContent($scope0_id, "#text/1", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<button>inc</button>${_$.markResumeNode($scope1_id, "#button/0")} -- <!>${_$.escapeXML((() => {
      if (clickCount > 1) throw new Error("ERROR!");
    })())}${_$.markResumeNode($scope1_id, "#text/1")}`);
    _$.writeEffect($scope1_id, "__tests__/template.marko_1_clickCount");
    _$.writeSubscribe($clickCount_closures, _$.writeScope($scope1_id, {
      _: _$.ensureScopeWithId($scope0_id),
      "ClosureSignalIndex:clickCount": 0
    }, "__tests__/template.marko", "4:2"));
    _$.resumeClosestBranch($scope1_id);
  }, $scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", err => {
        const $scope2_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(err)}${_$.markResumeNode($scope2_id, "#text/0")}`);
        _$.writeScope($scope2_id, {}, "__tests__/template.marko", "12:4");
      }, $scope0_id)
    })
  });
  _$.writeScope($scope0_id, {
    clickCount,
    "ClosureScopes:clickCount": $clickCount_closures
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});