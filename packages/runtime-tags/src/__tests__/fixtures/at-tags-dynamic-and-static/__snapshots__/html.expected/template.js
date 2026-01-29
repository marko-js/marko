import * as _ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let $item;
  _.forIn({
    a: 1,
    b: 2
  }, (a, v) => {
    $item = _.attrTags($item, {
      content: _._content("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html(`${_._escape(a)}${_._el_resume($scope1_id, "#text/0")}:<!>${_._escape(v)}${_._el_resume($scope1_id, "#text/1")}`);
        _._scope($scope1_id, {}, "__tests__/template.marko", "3:8");
      })
    });
  });
  _hello({
    other: _.attrTag({
      content: _._content("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("other");
      })
    }),
    item: $item
  });
});