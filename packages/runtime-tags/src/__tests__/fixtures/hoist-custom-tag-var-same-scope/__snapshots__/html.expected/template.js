import * as _ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $setHtml_getter = _._hoist($scope0_id, "__tests__/template.marko_0_setHtml/hoist");
  _thing({
    value: $setHtml_getter
  });
  let setHtml = _child({});
  _._scope($scope0_id, {
    setHtml
  }, "__tests__/template.marko", 0, {
    setHtml: "2:8"
  });
  _._assert_hoist(setHtml);
});