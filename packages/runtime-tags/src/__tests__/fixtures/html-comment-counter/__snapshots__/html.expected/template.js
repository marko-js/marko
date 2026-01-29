import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<div><button>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}<!--${_._escape_text(count)} + ${_._escape_text(count)} = ${_._escape_text(count + count)}-->${_._el_resume($scope0_id, "#comment/2")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "2:8"
  });
  _._resume_branch($scope0_id);
});