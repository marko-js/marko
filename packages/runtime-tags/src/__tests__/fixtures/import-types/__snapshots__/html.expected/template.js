import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const foo = true;
  const bar = true;
  _._html(`<div>${_._escape(String(foo))}${_._escape(String(bar))}</div>`);
});