import * as _ from "@marko/runtime-tags/debug/html";
import _helloSetter from "./tags/hello-setter.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const el = _._el($scope0_id, "__tests__/template.marko_0/#div");
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  _helloSetter({
    el: el
  });
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});