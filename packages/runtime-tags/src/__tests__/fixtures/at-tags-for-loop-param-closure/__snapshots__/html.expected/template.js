import * as _ from "@marko/runtime-tags/debug/html";
import _list from "./tags/list/index.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let $item;
  _.forOf([1, 2, 3], item => {
    $item = _.attrTags($item, {
      content: _._content("__tests__/template.marko_1_content", () => {
        const $scope1_id = _._scope_id();
        _._html(`${_._escape(item)}${_._el_resume($scope1_id, "#text/0")}`);
        _._scope($scope1_id, {}, "__tests__/template.marko", "3:5");
      })
    });
  });
  _list({
    item: $item
  });
});