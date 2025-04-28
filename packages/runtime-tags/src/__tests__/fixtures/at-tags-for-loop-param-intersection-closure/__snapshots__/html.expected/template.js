import * as _$ from "@marko/runtime-tags/debug/html";
import _list from "./tags/list/index.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $mult_closures = new Set();
  let mult = 2;
  let $item;
  _$.forOf([1, 2, 3], item => {
    $item = _$.attrTags($item, {
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const $scope1_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(item * mult)}${_$.markResumeNode($scope1_id, "#text/0")}`);
        _$.writeSubscribe($mult_closures, _$.writeScope($scope1_id, {
          item,
          _: _$.ensureScopeWithId($scope0_id),
          "ClosureSignalIndex:mult": 0
        }, "__tests__/template.marko", "4:5", {
          item: "3:7"
        }));
        _$.resumeClosestBranch($scope1_id);
      }, $scope0_id)
    });
  });
  _list({
    item: $item
  });
  _$.write(`<button>Multiplier: <!>${_$.escapeXML(mult)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_mult");
  _$.writeScope($scope0_id, {
    mult,
    "ClosureScopes:mult": $mult_closures
  }, "__tests__/template.marko", 0, {
    mult: "1:5"
  });
  _$.resumeClosestBranch($scope0_id);
});