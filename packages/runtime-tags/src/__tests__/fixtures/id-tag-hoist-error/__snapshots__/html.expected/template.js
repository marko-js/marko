import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $hoisted_y = _._hoist($scope0_id, "__tests__/template.marko_0_$hoisted_y/hoist");
  const x = _._id();
  const y = _._id();
  _._html(`<div>${_._escape(x)}</div>${_._escape($hoisted_y)}${_._el_resume($scope0_id, "#text/1")}`);
  _._scope($scope0_id, {
    y
  }, "__tests__/template.marko", 0, {
    y: "3:7"
  });
  _._assert_hoist(y);
});