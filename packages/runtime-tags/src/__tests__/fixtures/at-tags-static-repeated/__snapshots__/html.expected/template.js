import * as _ from "@marko/runtime-tags/debug/html";
import _list from "./tags/list/index.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _list({
    item: _.attrTags(_.attrTag({
      content: _._content("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html("Hello");
      })
    }), {
      content: _._content("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("Again");
      })
    })
  });
});