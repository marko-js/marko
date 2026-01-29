import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = 1;
  _._html(`<button>${_._escape(value)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._await($scope0_id, "#text/2", resolveAfter(0, 4), () => {
    const $scope2_id = _._scope_id();
    _._html("<span>Hello</span>");
  }, 0);
  _._if(() => {
    if (value) {
      const $scope1_id = _._scope_id();
      _._html(`<span>${_._escape(value)}${_._el_resume($scope1_id, "#text/0")}</span>`);
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "6:1");
      return 0;
    }
  }, $scope0_id, "#text/3", 1, /* value */1, /* value */1, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0_value");
  _._scope($scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "2:5"
  });
  _._resume_branch($scope0_id);
});