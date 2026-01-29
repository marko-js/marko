import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let a = 0;
  let b = 0;
  _._html(`<div><button class=a>${_._escape(a)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")} + <button class=b>${_._escape(b)}${_._el_resume($scope0_id, "#text/3")}</button>${_._el_resume($scope0_id, "#button/2")} = <!>${_._escape(a + b)}${_._el_resume($scope0_id, "#text/4")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    a,
    b
  }, "__tests__/template.marko", 0, {
    a: "2:8",
    b: "3:8"
  });
  _._resume_branch($scope0_id);
});