import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let items = [1, 2, 3];
  const el = _$.nodeRef();
  const write = _$.register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", $scope0_id);
  _$.write(`<button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/0")}<div></div>${_$.markResumeNode($scope0_id, "#div/1")}`);
  _$.resumeForOf(items, item => {
    const $scope1_id = _$.nextScopeId();
    const $childScope = _$.peekNextScopeId();
    _child({
      write: write,
      name: item
    }, 1);
    _$.writeScope($scope1_id, {
      "#childScope/0": _$.writeExistingScope($childScope)
    }, "__tests__/template.marko", "7:2");
  }, 0, $scope0_id, "#text/2");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope($scope0_id, {
    items,
    write
  }, "__tests__/template.marko", 0, {
    items: "1:6",
    write: "5:8"
  });
  _$.resumeClosestBranch($scope0_id);
});