const server_x = 1;
var client_x;
const x = typeof server_x === "undefined" ? client_x : server_x;
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div><span>${_._escape(x)}</span></div>`);
});