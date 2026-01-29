import wrapTag from "./tags/wrap.marko";
const Wrap = wrapTag;
import * as _ from "@marko/runtime-tags/debug/html";
import _wrap from "./tags/wrap.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div id=content-missing>");
  _wrap({
    class: "foo"
  });
  _._html("</div><div id=content-undefined>");
  _wrap({
    class: "foo",
    content: undefined
  });
  _._html("</div><div id=content-set>");
  _wrap({
    class: "foo",
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html("Hello World");
    })
  });
  _._html("</div><div id=dynamic>");
  _._dynamic_tag($scope0_id, "#text/3", Wrap, {
    class: "bar"
  }, _._content_resume("__tests__/template.marko_2_content", () => {
    const $scope2_id = _._scope_id();
    _._scope_reason();
    _._html("Hello World");
  }, $scope0_id), 0, 0);
  _._html("</div>");
});