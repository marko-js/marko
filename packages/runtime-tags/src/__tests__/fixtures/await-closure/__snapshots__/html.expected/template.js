import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $value__closures = new Set();
  let value = 1;
  _._html(`<button>${_._escape(value)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._try($scope0_id, "#text/2", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._await($scope1_id, "#text/0", resolveAfter(0, 4), () => {
      const $scope2_id = _._scope_id();
      _._script($scope2_id, "__tests__/template.marko_2_value");
      _._html(`<span>${_._escape(value)}${_._el_resume($scope2_id, "#text/0")}</span>`);
      _._scope($scope2_id, {
        _: _._scope_with_id($scope1_id),
        "ClosureSignalIndex:value": 0
      }, "__tests__/template.marko", "6:3");
      _._resume_branch($scope2_id);
    });
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "4:1");
  }, $scope0_id), {
    placeholder: _.attrTag({
      content: _._content_resume("__tests__/template.marko_3_content", () => {
        _._scope_reason();
        const $scope3_id = _._scope_id();
        _._html("loading...");
      }, $scope0_id)
    })
  });
  _._script($scope0_id, "__tests__/template.marko_0_value");
  _._scope($scope0_id, {
    value,
    "ClosureScopes:value": $value__closures
  }, "__tests__/template.marko", 0, {
    value: "2:5"
  });
  _._resume_branch($scope0_id);
});