import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("a");
  _._try($scope0_id, "#text/0", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html("b");
    _._await($scope1_id, "#text/0", resolveAfter("c", 2), data => {
      const $scope3_id = _._scope_id();
      _._html(_._escape(data));
    }, 0);
    _._html("d");
  }, $scope0_id), {
    placeholder: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("_A_");
      }, $scope0_id)
    })
  });
  _._html("e");
  _._await($scope0_id, "#text/1", resolveAfter("f", 1), data => {
    const $scope4_id = _._scope_id();
    _._html(_._escape(data));
  }, 0);
  _._html("g");
});