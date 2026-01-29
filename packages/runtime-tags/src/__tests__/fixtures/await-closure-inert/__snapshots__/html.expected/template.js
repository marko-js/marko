import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = 1;
  _._try($scope0_id, "#text/0", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._await($scope1_id, "#text/0", resolveAfter(0, 1), () => {
      const $scope2_id = _._scope_id();
      _._html(`<span>${_._escape(value)}</span>`);
      _._resume_branch($scope2_id);
    }, 0);
  }, $scope0_id), {
    placeholder: _.attrTag({
      content: _._content_resume("__tests__/template.marko_3_content", () => {
        _._scope_reason();
        const $scope3_id = _._scope_id();
        _._html("loading...");
      }, $scope0_id)
    })
  });
  _._resume_branch($scope0_id);
});