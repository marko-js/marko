import _getter from "./tags/getter.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let get = _getter({});
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_get");
  _._scope($scope0_id, {
    get
  }, "__tests__/template.marko", 0, {
    get: "1:9"
  });
});