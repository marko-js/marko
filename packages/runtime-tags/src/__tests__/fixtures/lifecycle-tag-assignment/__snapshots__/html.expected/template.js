import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 0;
  let prev = false;
  _._html(`<div>x=<span>${_._escape(x)}${_._el_resume($scope0_id, "#text/0")}</span>, was=<!>${_._escape(prev)}${_._el_resume($scope0_id, "#text/1")}</div><button id=increment>Increment</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _._resume_branch($scope0_id);
});