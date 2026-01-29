import wrapTag from "./tags/wrap.marko";
const Wrap = wrapTag;
import * as _ from "@marko/runtime-tags/debug/html";
import _wrap from "./tags/wrap.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div id=known>");
  _wrap({
    class: "foo"
  });
  _._html("</div><div id=dynamic>");
  _._dynamic_tag($scope0_id, "#text/1", Wrap, {
    class: "bar"
  }, 0, 0, 0);
  _._html("</div>");
});