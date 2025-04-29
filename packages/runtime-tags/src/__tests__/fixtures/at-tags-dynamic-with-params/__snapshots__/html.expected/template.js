import * as _$ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = true;
  const $childScope = _$.peekNextScopeId();
  let $item;
  if (x) {
    $item = _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_1_renderer", y => {
        const $scope1_id = _$.nextScopeId();
        _$.write(`y: <!>${_$.escapeXML(y)}${_$.markResumeNode($scope1_id, "#text/0")}`);
        _$.writeScope($scope1_id, {}, "__tests__/template.marko", "4:10");
      }, $scope0_id)
    });
  }
  _hello({
    item: $item
  }, 1);
  _$.write(`<button>Toggle</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x,
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});