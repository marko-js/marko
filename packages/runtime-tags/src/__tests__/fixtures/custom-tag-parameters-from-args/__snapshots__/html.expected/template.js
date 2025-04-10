import * as _$ from "@marko/runtime-tags/debug/html";
import _customTag from "./tags/custom-tag.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _customTag({
    content: _$.registerContent("__tests__/template.marko_1_renderer", (count, count2) => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<div>Counts: <!>${_$.escapeXML(count)}${_$.markResumeNode($scope1_id, "#text/0")},<!>${_$.escapeXML(count2)}${_$.markResumeNode($scope1_id, "#text/1")}</div>`);
      _$.writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
    }, $scope0_id)
  });
});