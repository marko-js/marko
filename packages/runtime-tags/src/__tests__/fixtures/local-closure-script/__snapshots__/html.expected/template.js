import * as _ from "@marko/runtime-tags/debug/html";
import _list from "./tags/list/index.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let $item;
  _.forOf([1, 2, 3], item => {
    $item = _.attrTags($item, {
      content: _._content("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html(`<div></div>${_._el_resume($scope1_id, "#div/0")}`);
        _._script($scope1_id, "__tests__/template.marko_1_item");
        _._scope($scope1_id, {
          item
        }, "__tests__/template.marko", "3:5", {
          item: "2:7"
        });
      })
    });
  });
  _list({
    item: $item
  });
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});