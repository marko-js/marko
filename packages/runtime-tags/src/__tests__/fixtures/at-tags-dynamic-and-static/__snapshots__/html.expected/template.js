import * as _ from "@marko/runtime-tags/debug/html";
import _hello from "./tags/hello/index.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let $item;
  _.forIn({
    a: 1,
    b: 2
  }, (a, v) => {
    $item = _.attrTags($item, {
      content: _._content_resume("__tests__/template.marko_2_content", () => {
        const $scope2_id = _._scope_id();
        _._html(`${_._escape(a)}${_._el_resume($scope2_id, "#text/0")}:<!>${_._escape(v)}${_._el_resume($scope2_id, "#text/1")}`);
        _._scope($scope2_id, {
          a,
          v
        }, "__tests__/template.marko", "3:8", {
          a: "2:10",
          v: "2:13"
        });
      }, $scope0_id)
    });
  });
  _hello({
    other: _.attrTag({
      content: _._content("__tests__/template.marko_1_content", () => {
        const $scope1_id = _._scope_id();
        _._html("other");
      })
    }),
    item: $item
  });
});