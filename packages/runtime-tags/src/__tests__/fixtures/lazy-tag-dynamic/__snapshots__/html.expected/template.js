import Child from "./child.marko" with { lazy: "load" };
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = true;
  let value = 1;
  _._html(`<button class=toggle>Toggle</button>${_._el_resume($scope0_id, "#button/0")}<button class=inc>Inc</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._dynamic_tag($scope0_id, "#text/2", show ? Child : null, {
    label: "x",
    value: value
  });
  _._script($scope0_id, "__tests__/template.marko_0_value");
  _._script($scope0_id, "__tests__/template.marko_0_show");
  _._scope($scope0_id, {
    show,
    value
  }, "__tests__/template.marko", 0, {
    show: "3:6",
    value: "4:6"
  });
  _._resume_branch($scope0_id);
}, 1);