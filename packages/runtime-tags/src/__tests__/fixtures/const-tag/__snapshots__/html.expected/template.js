import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $hoisted_y = _._hoist($scope0_id, "__tests__/template.marko_0_$hoisted_y/hoist");
  const x = 1;
  const y = _._resume(() => 1, "__tests__/template.marko_0/y");
  _._html(`<div>${_._escape(x)}${_._escape(y())}</div>${_._escape(typeof $hoisted_y)}${_._el_resume($scope0_id, "#text/2")}`);
  _._scope($scope0_id, {
    y
  }, "__tests__/template.marko", 0, {
    y: "3:10"
  });
  _._assert_hoist(y);
});