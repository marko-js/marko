import * as _$ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let $item;
  _$.forIn({
    a: 1,
    b: 2
  }, (a, v) => {
    $item = _$.attrTags($item, {
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const $scope1_id = _$.nextScopeId();
        _$.write(`${_$.escapeXML(a)}${_$.markResumeNode($scope1_id, "#text/0")}:<!>${_$.escapeXML(v)}${_$.markResumeNode($scope1_id, "#text/1")}`);
        _$.writeScope($scope1_id, {
          a,
          v
        }, "__tests__/template.marko", "3:8", {
          a: "2:10",
          v: "2:13"
        });
      }, $scope0_id)
    });
  });
  _hello({
    other: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", () => {
        const $scope2_id = _$.nextScopeId();
        _$.write("other");
      }, $scope0_id)
    }),
    item: $item
  });
});