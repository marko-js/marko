import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const x = 1;
  const y = 1;
  _._html(`<div>${_._escape(x)}</div>${_._escape(y)}`);
});