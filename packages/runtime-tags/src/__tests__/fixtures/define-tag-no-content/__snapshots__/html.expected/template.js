import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Foo = {};
  _._dynamic_tag($scope0_id, "#text/0", Foo, {}, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html("<div>Foo Fallback</div>");
  }, $scope0_id), 0, 0);
  const Bar = {};
  _._dynamic_tag($scope0_id, "#text/1", Bar, {}, _._content_resume("__tests__/template.marko_2_content", () => {
    const $scope2_id = _._scope_id();
    _._scope_reason();
    _._html("<div>Bar Fallback</div>");
  }, $scope0_id), 0, 0);
  const Baz = {
    content: _._content("__tests__/template.marko_3_content", () => {
      const $scope3_id = _._scope_id();
      _._scope_reason();
      _._html("<div>Baz Content</div>");
    })
  };
  Baz.content({});
});