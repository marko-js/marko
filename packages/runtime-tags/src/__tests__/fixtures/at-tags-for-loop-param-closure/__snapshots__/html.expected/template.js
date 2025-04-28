import * as _$ from "@marko/runtime-tags/debug/html";
import _list from "./tags/list/index.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let $item;
  _$.forOf([1, 2, 3], item => {
    $item = _$.attrTags($item, {
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const $scope1_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(item)}${_$.markResumeNode($scope1_id, "#text/0")}`);
        _$.writeScope($scope1_id, {
          item
        }, "__tests__/template.marko", "3:5", {
          item: "2:7"
        });
      }, $scope0_id)
    });
  });
  _list({
    item: $item
  });
});