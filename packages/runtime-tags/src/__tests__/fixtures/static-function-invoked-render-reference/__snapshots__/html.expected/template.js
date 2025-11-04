export function getAnswer() {
  return 42;
}
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _._html(`<div>${_._escape(getAnswer())}</div>`);
});