import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div>${_._escape((() => {
    throw new Error("Cannot use $signal in a server render.");
  })().onabort = () => {})}</div>`);
  _._resume_branch($scope0_id);
});