import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let a = [0];
  let b = 1;
  _._html(`<button>${_._escape(a.join(""))}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_a_b");
  _._scope($scope0_id, {
    a,
    b
  }, "__tests__/template.marko", 0, {
    a: "1:6",
    b: "2:6"
  });
  _._resume_branch($scope0_id);
});