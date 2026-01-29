import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const x = _._id();
  const y = _._id();
  _._html(`<div>${_._escape(x)} ${_._escape(y)}</div>`);
});