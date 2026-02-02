import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $value__closures = new Set();
  let value = 0;
  _._html(`<div id=outside>${_._escape(value)}${_._el_resume($scope0_id, "#text/0")}</div>`);
  _._try($scope0_id, "#text/1", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._await($scope1_id, "#text/0", resolveAfter(value, 3), value => {
      const $scope3_id = _._scope_id();
      _._html(`<div id=inside>${_._escape(value)}${_._el_resume($scope3_id, "#text/0")}</div>`);
      _._script($scope3_id, "__tests__/template.marko_3_value");
      _._script($scope3_id, "__tests__/template.marko_3");
      _._scope($scope3_id, {
        value
      }, "__tests__/template.marko", "7:3", {
        value: "7:9"
      });
    });
    _._subscribe($value__closures, _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:value": 0
    }, "__tests__/template.marko", "5:1"));
    _._resume_branch($scope1_id);
  }, $scope0_id), {
    placeholder: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("loading...");
      }, $scope0_id)
    })
  });
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    "ClosureScopes:value": $value__closures
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});