import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let items = [0, 1];
  _$.write(`<button>Push</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.resumeForOf(items, outer => {
    const $scope1_id = _$.nextScopeId();
    _$.resumeSingleNodeForOf(items, inner => {
      const $scope2_id = _$.nextScopeId();
      const $childScope = _$.peekNextScope();
      _child({
        name: `${outer}.${inner}`
      });
      _$.writeScope($scope2_id, {
        "#childScope/0": _$.writeExistingScope($childScope),
        _: _$.ensureScopeWithId($scope1_id)
      }, "__tests__/template.marko", "5:4");
    }, 0, $scope1_id, "#text/0");
    _$.writeScope($scope1_id, {
      outer,
      _: _$.ensureScopeWithId($scope0_id)
    }, "__tests__/template.marko", "4:2", {
      outer: "4:6"
    });
  }, 0, $scope0_id, "#text/1");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope($scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});